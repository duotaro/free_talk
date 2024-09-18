import { Text } from "../../../pages/news/[id]";

export default function Paragraphs({ text, maxWidth = "ml" }) {
    if(!text){
        return <></>
    }

    const classname = `max-w-${maxWidth} mt-4 text-md font-light leading-relaxed text-gray-500 `

    const isArray = Array.isArray(text);

    const whiteSpaceStyle = isArray ? { whiteSpace: 'pre-wrap' } : {}
    return (
      <div className={classname} style={whiteSpaceStyle}>
        {isArray && (
            <Text text={text} />
        )}
        {!isArray && (
          <>{text}</>  
        )}
      </div>
    );
}
