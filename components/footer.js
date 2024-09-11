import React, { useContext } from 'react';
import { useLocale } from "../utils/locale";
import LocaleContext from "./context/localeContext";
import {
  MapPinIcon,
  BuildingOfficeIcon,
  EnvelopeIcon,
  ClockIcon
} from '@heroicons/react/24/outline'
export default function Footer({  }) {
  const { locale } = useContext(LocaleContext);
  const { json } = useLocale(locale)
  const lang = json.footer

  return (
    <footer id="contact" className="border-neutral-300 text-lg-start text-white text-dark p-3 bg-blue-800 text-white">
			<div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between">
				<div className="lg:w-1/2 mb-6 md:mb-0">
          <div>
            <h3 className="text-lg font-bold">{lang.title}</h3>
            <ul className="mt-4 space-y-4 [&>li]:text-neutral-500">
              <div className="col-md-6 mb-4 mb-md-0">
                <div className="flex items-center p-4">
                  <div className="flex items-center justify-center w-10 h-10 border-2 border-white-300 p-1 mr-3">
                    <MapPinIcon className="w-8 h-8" />
                  </div>
                  <span className="text-md font-semibold p-1 mr-3">{lang.location}:</span>
                  <span className="text-md "><a href="https://www.google.com/maps?q=1701+E+Seneca+St,+Tucson,+AZ+85719,+USA" target="_blank" className="text-white text-left">International School of Tucson <br />1701 East Seneca Street, Tucson, AZ 85719</a></span> 
                </div>
                {/* <ul className="list-unstyled mb-0">
                  <li>
                    <a href="https://www.google.com/maps?q=1701+E+Seneca+St,+Tucson,+AZ+85719,+USA" target="_blank" className="text-white text-left">International School of Tucson <br />1701 East Seneca Street, Tucson, AZ 85719</a>
                  </li>
                </ul> */}
              </div>
              <div className="col-md-6 mb-4 mb-md-0">
                <div className="flex items-center p-4">
                  <div className="flex items-center justify-center w-10 h-10 border-2 border-white-300 p-1 mr-3">
                    <BuildingOfficeIcon className="w-8 h-8 " />
                  </div>
                  <span className="text-md font-semibold p-1 mr-3">{lang.address}:</span>
                  <span className="text-md "><a href="https://www.google.com/maps?q=1803+E+Seneca+St,+Tucson,+AZ+85719,+USA" target="_blank" className="text-white">1803 East Seneca Street,<br />Tucson, AZ 85719</a></span> 
                </div>
                {/* <ul className="list-unstyled mb-0">
                  <li>
                    <a href="https://www.google.com/maps?q=1701+E+Seneca+St,+Tucson,+AZ+85719,+USA" target="_blank" className="text-white text-left">International School of Tucson <br />1701 East Seneca Street, Tucson, AZ 85719</a>
                  </li>
                </ul> */}
              </div>
              <div className="col-md-6 mb-4 mb-md-0">
                <div className="flex items-center p-4">
                  <div className="flex items-center justify-center w-10 h-10 border-2 border-white-300 p-1 mr-3">
                    <EnvelopeIcon className="w-8 h-8" />
                  </div>
                  <span className="text-md font-semibold p-1 mr-3">{lang.email}:</span>
                  <span className="text-md "><a href="mailto:info@tucson.nihongo.hosyuko@gmail.com" target="_blank" className="text-white ">tucson.nihongo.hosyuko@gmail.com</a></span> 
                </div>
                {/* <ul className="list-unstyled mb-0">
                  <li>
                  <a href="mailto:info@tucson.nihongo.hosyuko@gmail.com" target="_blank" className="text-white ">tucson.nihongo.hosyuko@gmail.com</a>
                  </li>
                </ul> */}
              </div>
              <div className="col-md-6 mb-4 mb-md-0">
                <div className="flex items-center p-4">
                  <div className="flex items-center justify-center w-10 h-10 border-2 border-white-300 p-1 mr-3">
                    <ClockIcon className="w-8 h-8" />
                  </div>
                  <span className="text-md font-semibold p-1 mr-3">{lang.class}:</span>
                  <span className="text-md ">何時？？</span>
                </div>
                {/* <ul className="list-unstyled mb-0">
                  <li>
                  何時？？
                  </li>
                </ul> */}
              </div>
              <div className="col-md-6 mb-4 mb-md-0">
                <div className="flex items-center p-4">
                  <div className="flex items-center justify-center w-10 h-10 border-2 border-white-300 p-1 mr-3">
                    <ClockIcon className="w-8 h-8" />
                  </div>
                  <span className="text-md font-semibold p-1 mr-3">{lang.sns}:</span>
                  <span className="text-md "><a href="https://www.facebook.com/tucsonnihongohosyuko/" target="_blank" className="text-white text-center">
                      <img src="image/fb.png" width="30" className='text-center'></img>
                    </a></span>
                </div>
                {/* <ul className="list-unstyled mb-0">
                  <li>
                    <a href="https://www.facebook.com/tucsonnihongohosyuko/" target="_blank" className="text-white text-center">
                      <img src="image/fb.png" width="30" className='text-center'></img>
                    </a>
                  </li>
                </ul> */}
              </div>
            </ul>
          </div>
				</div>

				<div className="lg:w-1/2 flex items-center justify-center">
          <div className='p-3 border-1 bg-white text-black'>
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

				<div className="text-center border-t border-neutral-200 py-10 sm:flex-row my-5">
					<p className="text-sm text-neutral-100">&copy; 2015- Tucson Japanese School All rights reserved.</p>

				</div>
			</div>
		</footer>
   
)}

{/* <footer className="text-center text-lg-start text-white text-dark p-3 bg-blue-800 text-white">
<div className="container p-4 pb-0">
  <section className="">
    <div className="row mb-md-5">
      <div className="col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase"><i className="bi bi-geo-alt m-2"></i>{lang.location}</h5>
        <ul className="list-unstyled mb-0">
          <li>
            <a href="https://www.google.com/maps?q=1701+E+Seneca+St,+Tucson,+AZ+85719,+USA" target="_blank" className="text-white">International School of Tucson <br />1701 East Seneca Street, Tucson, AZ 85719</a>
          </li>
        </ul>
      </div>
      <hr className="d-md-none d-block m-4"/>
      <div className="col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase"><i className="bi bi-envelope-fill m-2" ></i>{lang.address}</h5>
        <ul className="list-unstyled mb-0">
          <li>
          <a href="https://www.google.com/maps?q=1803+E+Seneca+St,+Tucson,+AZ+85719,+USA" target="_blank" className="text-white">1803 East Seneca Street,<br />Tucson, AZ 85719</a>
          </li>
        </ul>
      </div>
    </div>
    <hr className="d-md-none d-block m-4"/>
    <div className="row">
      <div className="col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase"><i className="bi bi-facebook m-2 " ></i>{lang.sns}</h5>
        <ul className="list-unstyled mb-0">
          <li className='flex items-center justify-center'>
          <a href="https://www.facebook.com/tucsonnihongohosyuko/" target="_blank" className="text-white text-center">
            <img src="image/fb.png" width="25" className='text-center'></img>
          </a>
          </li>
        </ul>
      </div>
      <hr className="d-md-none d-block m-4"/>
      <div className="col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase"><i className="bi bi-envelope-fill m-2 " ></i>{lang.email}</h5>
        <ul className="list-unstyled mb-0">
          <li>
          <a href="mailto:info@tucson.nihongo.hosyuko@gmail.com" target="_blank" className="text-white ">tucson.nihongo.hosyuko@gmail.com</a>
          </li>
        </ul>
      </div>
    </div>
</section>
<div className="row ">
    <p className="m-0 pt-4 text-center text-secondary">&copy; 2015- Tucson Japanese School All rights reserved.</p>
</div>
</div>
</footer> */}