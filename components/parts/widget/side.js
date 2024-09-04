export const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID;
import LocaleContext from '../../context/localeContext.js';
import React, { useContext } from 'react';
import SponsorList from '../sponsor/index.js';
import { useLocale } from '../../../utils/locale.js';
import Side_Contact from '../contact/side.js';
export default function Side({ sponsorList }) {
  const { locale } = useContext(LocaleContext);
  const { json } = useLocale(locale)
  let lang = json.side
  let sponsors = sponsorList[0]
  var title = ""
  if(sponsors){
    title = lang[sponsors.i18nkey].replace("{year}", sponsors.year);
  }

  return (
      <>
        {/* <div className="card mb-4">
            <div className="card-header  bg-dark text-white">sns</div>
            
        </div> */}
        {sponsors && (
        <div className="card mb-4">
            <div className="card-header  bg-dark text-white">
              <i class="bi bi-emoji-smile text-warning m-1"></i>{title}
            </div>
            <SponsorList sponsors={sponsors} />
        </div>
        )}
        <div className="card mb-4">
            <div className="card-header  bg-dark text-white">
              <i className="bi bi-graph-up-arrow text-warning m-1">{lang.contact}</i>
            </div>
            <Side_Contact />
        </div>
        <div className="card mb-4">
            <div className="card-header  bg-dark text-white">
              <i className="bi bi-hand-index text-danger m-1"></i>{lang.archives}
            </div>
            
        </div>
    </>
  );
}