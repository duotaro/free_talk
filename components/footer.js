import React, { useContext } from 'react';
import { useLocale } from "../utils/locale";
import LocaleContext from "./context/localeContext";
import {
  MapPinIcon,
  BuildingOfficeIcon,
  EnvelopeIcon,
  ClockIcon
} from '@heroicons/react/24/outline'
import SocialMedia from './parts/sns';
import Link from 'next/link';


export default function Footer({  }) {
  const { locale } = useContext(LocaleContext);
  const { json } = useLocale(locale)
  const lang = json.footer

  let hClass = "text-md hidden xl:block"
  let vClass = "list-unstyled mb-0 block xl:hidden border-b pb-3"


  return (
    <footer id="contact" className="border-neutral-300 text-lg-start p-3 bg-gradient-to-b from-cyan-500 to-cyan-600 text-white">
			<div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
				<div className="md:w-1/2 md:mb-6 md:mb-0 p-3">
          <div>
            <Link href={`/contact/`}><h3 className="text-lg font-bold hover:text-zinc-200">{lang.title}</h3></Link>
            <ul className="mt-4 space-y-4 ">
              <div className="col-md-6 mb-4 mb-md-0">
                <div className="flex items-center p-4">
                  <div className="flex items-center justify-center w-10 h-10 border-2 border-white-300 p-1 mr-3">
                    <MapPinIcon className="w-8 h-8" />
                  </div>
                  <span className="text-md font-semibold p-1 mr-3">{lang.location}:</span>
                  <span className={hClass}><a href="https://www.google.com/maps?q=1701+E+Seneca+St,+Tucson,+AZ+85719,+USA" target="_blank" className="text-white text-left">International School of Tucson <br />1701 East Seneca Street, Tucson, AZ 85719</a></span> 
                </div>
                <ul className={vClass}>
                  <li>
                    <a href="https://www.google.com/maps?q=1701+E+Seneca+St,+Tucson,+AZ+85719,+USA" target="_blank" className="text-white text-left">International School of Tucson <br />1701 East Seneca Street, Tucson, AZ 85719</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 mb-4 mb-md-0">
                <div className="flex items-center p-4">
                  <div className="flex items-center justify-center w-10 h-10 border-2 border-white-300 p-1 mr-3">
                    <BuildingOfficeIcon className="w-8 h-8 " />
                  </div>
                  <span className="text-md font-semibold p-1 mr-3">{lang.address}:</span>
                  <span className={hClass}><a href="https://www.google.com/maps?q=1803+E+Seneca+St,+Tucson,+AZ+85719,+USA" target="_blank" className="text-white">1803 East Seneca Street,<br />Tucson, AZ 85719</a></span> 
                </div>
                <ul className={vClass}>
                  <li>
                    <a href="https://www.google.com/maps?q=1701+E+Seneca+St,+Tucson,+AZ+85719,+USA" target="_blank" className="text-white text-left">International School of Tucson <br />1701 East Seneca Street, Tucson, AZ 85719</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 mb-4 mb-md-0">
                <div className="flex items-center p-4">
                  <div className="flex items-center justify-center w-10 h-10 border-2 border-white-300 p-1 mr-3">
                    <EnvelopeIcon className="w-8 h-8" />
                  </div>
                  <span className="text-md font-semibold p-1 mr-3">{lang.email}:</span>
                  <span className={hClass}><a href="mailto:info@tucson.nihongo.hosyuko@gmail.com" target="_blank" className="text-white ">tucson.nihongo.hosyuko@gmail.com</a></span> 
                </div>
                <ul className={vClass}>
                  <li>
                  <a href="mailto:info@tucson.nihongo.hosyuko@gmail.com" target="_blank" className="text-white ">tucson.nihongo.hosyuko@gmail.com</a>
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
                      <SocialMedia />
                    </ul>
                  </span>
                </div>
                <ul className={`${vClass} border-b-0 flex space-x-4`}>
                  <SocialMedia />
                </ul>
              </div>
            </ul>
          </div>
				</div>

				<div className="md:w-1/2 p-3 md:pt-20">
          <div className='p-3 '>
          {lang.polycy}
          </div>
        </div>
        </div>

				{/* {channels?.channels && (
					<div className="mb-4 text-neutral-500">
						<label>
							<span className="text-sm">Change currency:</span> <ChannelSelect channels={channels.channels} />
						</label>
					</div>
				)} */}

				<div className="text-center border-t border-neutral-200 py-5 sm:flex-row ">
					<p className="text-sm text-neutral-100">&copy; 2015- Tucson Japanese School All rights reserved.</p>

				</div>
			</div>
		</footer>
   
)}
