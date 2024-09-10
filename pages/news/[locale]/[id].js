import { Fragment } from "react";
import React, { useContext } from 'react';
import Head from "next/head";
import { getDatabase, getPage, getBlocks } from "../../../lib/notion";
import Link from "next/link";
import Layout from "../../../components/layout"
import LocaleContext from "../../../components/context/localeContext";
import { useLocale } from "../../../utils/locale";
import { getDetailList } from "../../../entity/newsEntity";

export const Text = ({ text }) => {
  if (!text) {
    return null;
  }
  return text.map((value) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;
    return (
      <span
        className={[
          bold ? "font-bold" : "",
          code ? "font-mono bg-gray-200 p-1 rounded" : "",
          italic ? "italic" : "",
          strikethrough ? "line-through" : "",
          underline ? "underline" : "",
        ].join(" ")}
        style={color !== "default" ? { color } : {}}
        key={text.content}
      >
        {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
      </span>
    );
  });
};

const renderNestedList = (block, genre) => {
  const { type } = block;
  const value = block[type];
  if (!value) return null;

  const isNumberedList = value.children[0].type === "numbered_list_item";

  if (isNumberedList) {
    return <ol>{value.children.map((block) => renderBlock(block))}</ol>;
  }
  return <ul>{value.children.map((block) => renderBlock(block))}</ul>;
};

const renderBlock = (block) => {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case "paragraph":
      const txtArray = value.rich_text
      if(!txtArray || txtArray.length == 0){
        return (
          <p></p>
        )
      };

      if(txtArray.length > 1){
        const mention = txtArray[0].mention
        if(!mention) {
          return (
            <p>
              <Text text={value.rich_text} />
            </p>
          );
        }
        const pageId = mention.page.id
        const mentinTitle = txtArray[0].plain_text
        return (
          <p>
            <Link href={`/news/${pageId}`}>
              {mentinTitle}
            </Link>
          </p>
        );
      }
      return (
        <p>
          <Text text={value.rich_text} />
        </p>
      );
    case "heading_1":
      return (
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
          <Text text={value.rich_text} />
        </h1>
      );
    case "heading_2":
      return (
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3">
          <Text text={value.rich_text} />
        </h2>
      );
    case "heading_3":
      return (
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 mb-2">
          <Text text={value.rich_text} />
        </h3>
      );
    case "bulleted_list": {
      return <ul>{value.children.map((child) => renderBlock(child))}</ul>;
    }
    case "numbered_list": {
      return <ol>{value.children.map((child) => renderBlock(child))}</ol>;
    }
    case "bulleted_list_item":
    case "numbered_list_item":
      return (
        <li key={block.id}>
          <Text text={value.rich_text} />
          {!!value.children && renderNestedList(block, genre)}
        </li>
      );
    case "to_do":
      return (
        <div>
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={value.checked} />{" "}
            <Text text={value.rich_text} />
          </label>
        </div>
      );
    case "toggle":
      return (
        <details>
          <summary>
            <Text text={value.rich_text} />
          </summary>
          {block.children?.map((child) => (
            <Fragment key={child.id}>{renderBlock(child, genre)}</Fragment>
          ))}
        </details>
      );
    case "child_page":
      return (
        <div className="">
          <strong>{value.title}</strong>
          {block.children.map((child) => renderBlock(child, genre))}
        </div>
      );
    case "image":
      const src =
        value.type === "external" ? value.external.url : value.file.url;
      const caption = value.caption ? value.caption[0]?.plain_text : "";
      return (
        <figure>
          <img src={src} alt={caption} style={{width : '100%'}}/>
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      );
    case "divider":
      return <hr key={id} />;
    case "quote":
      let val = ''
      value.rich_text.map(t => {
        val += t.plain_text
      })
      return <blockquote key={id}>{val}</blockquote>;
    case "code":
      return (
        <pre className="font-mono">
          <code className="font-mono bg-gray-200 p-1 rounded" key={id}>
            {value.rich_text[0].plain_text}
          </code>
        </pre>
      );
    case "file":
      const src_file =
        value.type === "external" ? value.external.url : value.file.url;
      const splitSourceArray = src_file.split("/");
      const lastElementInArray = splitSourceArray[splitSourceArray.length - 1];
      const caption_file = value.caption ? value.caption[0]?.plain_text : "";
      return (
        <figure>
          <div className="max-w-md mx-auto">
            📎{" "}
            <Link href={src_file} passHref>
              {lastElementInArray.split("?")[0]}
            </Link>
          </div>
          {caption_file && <figcaption>{caption_file}</figcaption>}
        </figure>
      );
    case "bookmark":
      const href = value.url;
      return (
        <a href={href} target="_brank" className="">
          {href}
        </a>
      );
    case "table": {
      return (
        <table className="w-full border-collapse">
          <tbody>
            {block.children?.map((child, i) => {
              const RowElement =
                value.has_column_header && i == 0 ? "th" : "td";
              return (
                <tr key={child.id}>
                  {child.table_row?.cells?.map((cell, i) => {
                    return (
                      <RowElement key={`${cell.plain_text}-${i}`}>
                        <Text text={cell} />
                      </RowElement>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    }
    case "column_list": {
      return (
        <div className="">
          {block.children.map((block) => renderBlock(block))}
        </div>
      );
    }
    case "column": {
      return <div>{block.children.map((child) => renderBlock(child))}</div>;
    }
    case "embed": {
      const url = value.url;
      // twitter埋め込み
      if(url.indexOf("https://twitter.com") > -1){
        const pos = url.indexOf('?')
        let tweetId = url.substring(0, pos).split('/')[5]
        if (!tweetId) {
          tweetId = url.split('/')[5]
        }
        return (<TwitterTweetEmbed key={id} tweetId={tweetId} options={{ margin: '0 auto;' }} />)
      }
      return (
        <a href={url} target="_brank" className="">
          {url}
        </a>
      );
    }
    default:
      return `❌ Unsupported block (${
        type === "unsupported" ? "unsupported by Notion API" : type
      })`;
  }
};

export default function Post({ page, blocks}) {
    const { locale } = useContext(LocaleContext);
    const { json, metaTitleExtension } = useLocale(locale)
    let lang = json.navigation


  if (!page || !blocks) {
    return <div>{json.common.not_found_article}</div>;
  }
  let pageTitle = ""
  console.log("-------------")
    console.log(page.properties)
    console.log("-------**********")
  for(const t of page.properties.locale.title){
    pageTitle += t.plain_text
  }

  const createtDate = new Date(page.created_time).toLocaleString(
    "ja",
    {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }
  );
  const lastEditDate = new Date(page.last_edited_time).toLocaleString(
    "ja",
    {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }
  );  

  const adIndex = Math.ceil(blocks.length/2)
  return (
    <Layout>
      <Head>
        <title>{pageTitle} - {metaTitleExtension} </title>
        <meta name="description" content={`${lang.about} - ${lang.description}`} />
      </Head>

      <div className="container mt-5">
            <div className="row">
                <div className="col-lg-8">
                    {/* Post content*/}
                    <article>
                        <header className="mb-4">
                            {/* <h1 className="fw-bolder mb-1">{pageTitle}</h1> */}
                            <div className="text-muted fst-italic mb-2">
                              <strong>作成日</strong> {createtDate} / 更新日 {lastEditDate}
                            </div>
                        </header>
                        {/* <p>広告</p> */}
                        {/* <figure className="mb-4"><img className="img-fluid rounded" src="https://dummyimage.com/900x400/ced4da/6c757d.jpg" alt="..." /></figure> */}
                        {/* Post content*/}
                        {blocks.map((block, index) => {
                          
                          if(adIndex == index){
                            return (
                              <Fragment key={block.id}>
                                {/* 広告 */}
                                {renderBlock(block)}
                              </Fragment>
                            )
                          } else {
                            return (
                              <Fragment key={block.id}>{renderBlock(block)}</Fragment>
                            )
                          }
                          
                          })}
                    </article>
                    <Link href="/">← Go home</Link>
                </div>
            </div>
        </div>
    </Layout>
  );
}

const PARENT_NEWS_ID = "cc0b1eb3570842ba926cc71ecaf5df4d"
export const getStaticPaths = async () => {
    const database = await getDatabase(PARENT_NEWS_ID)
    // 
    let params = await getDetailList(database)


    // {detailId: detail.id, detail:page, locale: detail.properties["locale"].title[0].plain_text}
    let resList = []
    for(let param of params){
      let res = {locale: param.locale, id : param.detailId}
      resList.push({params: res})
    }

   return {
        paths: resList,
        fallback: false,
    };
};

export const getStaticProps = async (context) => {
  const { locale, id } = context.params;

  
  
  const page = await getPage(id);
  const blocks = await getBlocks(id);

  return {
    props: {
      page,
      blocks
    },
    revalidate: 1,
  };
};
