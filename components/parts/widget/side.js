export const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID;
import POPULAR from '../popular/list.js'
import RECOMMEND from '../recommend/list.js'
import SponsorList from '../sponsor/index.js';
export default function Side({ sponsorList, lang }) {
  let sponsors = sponsorList[0]

  let title = lang[sponsors.i18nkey].replace("{year}", sponsors.year);
  console.log(title)

  return (
      <>
        {/* <div className="card mb-4">
            <div className="card-header  bg-dark text-white">sns</div>
            
        </div> */}
        <div className="card mb-4">
            <div className="card-header  bg-dark text-white">
              <i class="bi bi-emoji-smile text-warning m-1"></i>{title}
            </div>
            <SponsorList sponsors={sponsors} />
        </div>
        <div className="card mb-4">
            <div className="card-header  bg-dark text-white">
              <i className="bi bi-graph-up-arrow text-warning m-1"></i>人気記事
            </div>
            <POPULAR />
        </div>
        <div className="card mb-4">
            <div className="card-header  bg-dark text-white">
              <i className="bi bi-hand-index text-danger m-1"></i>おすすめ記事
            </div>
            <RECOMMEND />
        </div>
    </>
  );
}