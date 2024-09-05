import React, { useContext } from 'react';
import { HEADER_MENU } from "../const";
import { useLocale } from "../utils/locale";
import LocaleContext from "./context/localeContext";

export default function Nav({  }) {
  const { locale, setLocale } = useContext(LocaleContext);
  const { json } = useLocale(locale)
  const lang = json.navigation

  return (

    <nav className="navbar navbar-expand-lg navbar-light gnav" style={{backgroundColor:"#0047AB"}}> 
        <button className="navbar-toggler text-white " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="bi bi-list"></i>
        </button>
        <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
        <ul className="nav nav-pills nav-fill">
          {Object.keys(HEADER_MENU).map((key) => {
            const item = HEADER_MENU[key]
            return (
              <>
              {item.dropdowns.length == 0 && (
                <li className="nav-item" key={item.key}>
                  <a className="nav-link text-light" aria-current="page" href={item.link}>{lang[item.key]}</a>
                </li>
              )}
              {item.dropdowns.length > 0 && (
                <li className="nav-item dropdown" key={item.key}>
                  <a className="nav-link dropdown-toggle text-light" href="#" id={item.key} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {lang[item.key]}
                  </a>
                  <ul className="dropdown-menu" aria-labelledby={item.keys}>
                    {item.dropdowns.map((dropdown) => {
                      return (
                        <li><a className="dropdown-item" href={dropdown.link}>{lang[dropdown.key]}</a></li>  
                      )
                    })}
                  </ul>
                </li>
              )}
              </>
            )
          })}

          </ul>
        </div>
  </nav>
)}