import React, { useContext } from 'react';
import Link from "next/link";
import LocaleContext from "../../context/localeContext";
import { useLocale } from "../../../utils/locale";
import {
  MapPinIcon,
  BuildingOfficeIcon,
  EnvelopeIcon,
  ClockIcon
} from '@heroicons/react/24/outline'
import SocialMedia from '../sns';
import Caution from '../caution';

export default function Contact({ isFooter }) {

  const { locale } = useContext(LocaleContext);
  const { json } = useLocale(locale)
  const lang = json.footer

  let hClass = "text-md hidden xl:block"
  let vClass = "list-unstyled mb-0 block xl:hidden border-b pb-3"
  let textClass = isFooter ? "text-white text-left" : "text-black text-left"

    return (
        <div>
            {isFooter && (
              <Link href={`/contact/`}><h3 className="text-lg font-bold hover:text-zinc-200">{lang.title}</h3></Link>
            )}
            <ul className="mt-4 space-y-4 ">
              <div className="col-md-6 mb-4 mb-md-0">
                <div className="flex items-center p-4">
                  <div className="flex items-center justify-center w-10 h-10 border-2 border-white-300 p-1 mr-3">
                    <MapPinIcon className="w-8 h-8" />
                  </div>
                  <span className="text-md font-semibold p-1 mr-3">{lang.location}:</span>
                  <span className={hClass}>
                    <a href="https://www.google.com/maps?q=1701+E+Seneca+St,+Tucson,+AZ+85719,+USA" target="_blank" className={textClass}>International School of Tucson <br />1701 East Seneca Street, Tucson, AZ 85719</a><br />
                    <Caution text={lang.caution} />
                  </span> 
                </div>
                <ul className={vClass}>
                  <li>
                    <a href="https://www.google.com/maps?q=1701+E+Seneca+St,+Tucson,+AZ+85719,+USA" target="_blank" className={textClass}>International School of Tucson <br />1701 East Seneca Street, Tucson, AZ 85719</a><br />
                    <Caution text={lang.caution} />
                  </li>
                </ul>
              </div>
              <div className="col-md-6 mb-4 mb-md-0">
                <div className="flex items-center p-4">
                  <div className="flex items-center justify-center w-10 h-10 border-2 border-white-300 p-1 mr-3">
                    <BuildingOfficeIcon className="w-8 h-8 " />
                  </div>
                  <span className="text-md font-semibold p-1 mr-3">{lang.address}:</span>
                  <span className={hClass}><a href="https://www.google.com/maps?q=1803+E+Seneca+St,+Tucson,+AZ+85719,+USA" target="_blank" className={textClass}>1803 E Seneca Street, Tucson AZ 85719</a></span> 
                </div>
                <ul className={vClass}>
                  <li>
                    <a href="https://www.google.com/maps?q=1803+E+Seneca+St,+Tucson,+AZ+85719,+USA" target="_blank" className={textClass}>1803 E Seneca St, Tucson AZ 85719</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 mb-4 mb-md-0">
                <div className="flex items-center p-4">
                  <div className="flex items-center justify-center w-10 h-10 border-2 border-white-300 p-1 mr-3">
                    <EnvelopeIcon className="w-8 h-8" />
                  </div>
                  <span className="text-md font-semibold p-1 mr-3">{lang.email}:</span>
                  <span className={hClass}><a href="mailto:info@tucson.nihongo.hosyuko@gmail.com" target="_blank" className={textClass}>tucson.nihongo.hosyuko@gmail.com</a></span> 
                </div>
                <ul className={vClass}>
                  <li>
                  <a href="mailto:info@tucson.nihongo.hosyuko@gmail.com" target="_blank" className={textClass}>tucson.nihongo.hosyuko@gmail.com</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 mb-4 mb-md-0">
                <div className="flex items-center p-4">
                  <div className="flex items-center justify-center w-10 h-10 border-2 border-white-300 p-1 mr-3">
                    <ClockIcon className="w-8 h-8" />
                  </div>
                  <span className="text-md font-semibold p-1 mr-3">{lang.class}:</span>
                  <span className={hClass}>{lang.datetime}</span>
                </div>
                <ul className={vClass}>
                  <li>
                  {lang.datetime}
                  </li>
                </ul>
              </div>
              <div className="col-md-6 mb-4 mb-md-0">
                <div className="flex items-center p-4">
                  <div className="flex items-center justify-center w-10 h-10 border-2 border-white-300 p-1 mr-3">
                    <ClockIcon className="w-8 h-8" />
                  </div>
                  <span className="text-md font-semibold p-1 mr-3">{lang.sns}:</span>
                  <span className={`${hClass} flex space-x-4`}>
                    <ul className={`border-b-0 flex space-x-4`}>
                      <SocialMedia isFooter={isFooter}/>
                    </ul>
                  </span>
                </div>
                <ul className={`${vClass} border-b-0 flex space-x-4`}>
                  <SocialMedia isFooter={isFooter}/>
                </ul>
              </div>
            </ul>
        </div>
    )
};