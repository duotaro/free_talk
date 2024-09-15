import React, { useContext } from 'react';
import { useLocale } from "../utils/locale";
import LocaleContext from "./context/localeContext";
import Contact from './parts/contact';


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
          <Contact isFooter={true}/>
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
