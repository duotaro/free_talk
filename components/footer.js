import React, { useContext } from 'react';
import { useLocale } from "../utils/locale";
import LocaleContext from "./context/localeContext";

export default function Footer({  }) {
  const { locale } = useContext(LocaleContext);
  const { json } = useLocale(locale)
  const lang = json.footer

  return (
    <footer className="text-center text-lg-start text-white text-dark p-3 bg-dark bg-gradient">
      <div className="container p-4 pb-0">
        <section className="">
          <div className="row mb-md-5">
            <div className="col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase"><i className="bi bi-geo-alt m-2"></i>{lang.location}</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="https://www.google.com/maps?q=1701+E+Seneca+St,+Tucson,+AZ+85719,+USA" target="_blank" className="link-light ">International School of Tucson <br />1701 East Seneca Street, Tucson, AZ 85719</a>
                </li>
              </ul>
            </div>
            <hr className="d-md-none d-block m-4"/>
            <div className="col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase"><i className="bi bi-envelope-fill m-2" ></i>{lang.address}</h5>
              <ul className="list-unstyled mb-0">
                <li>
                <a href="https://www.google.com/maps?q=1803+E+Seneca+St,+Tucson,+AZ+85719,+USA" target="_blank" className="link-light ">1803 East Seneca Street,<br />Tucson, AZ 85719</a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="d-md-none d-block m-4"/>
          <div className="row">
            <div className="col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase"><i className="bi bi-facebook m-2" ></i>{lang.sns}</h5>
              <ul className="list-unstyled mb-0">
                <li>
                <a href="https://www.facebook.com/tucsonnihongohosyuko/" target="_blank" className="link-light ">tucsonnihongohosyuko</a>
                </li>
              </ul>
            </div>
            <hr className="d-md-none d-block m-4"/>
            <div className="col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase"><i className="bi bi-envelope-fill m-2" ></i>{lang.email}</h5>
              <ul className="list-unstyled mb-0">
                <li>
                <a href="mailto:info@tucson.nihongo.hosyuko@gmail.com" target="_blank" className="link-light ">tucson.nihongo.hosyuko@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
      </section>
      <div className="row ">
          <p className="m-0 pt-4 text-center text-secondary">&copy; 2015- Tucson Japanese Language School All rights reserved.</p>
      </div>
    </div>
  </footer>
)}
 {/* <footer className="text-dark p-3 bg-dark">
        <div className="container">
          <div className="row ">
            <div className="col-12">
              <section className="justify-content-between p-2 text-white">
                  <div className="mx-auto mb-md-0 mb-4">
                    <h6 className="text-uppercase fw-bold">{lang.title}</h6>
                    <hr className="mb-1 mt-0 d-inline-block mx-auto" />
                    <div className="row mt-2 ">
                      <div className="col-2 "><i className="bi bi-geo-alt m-2 border p-2"></i></div>
                      <div className="col-10"><a className="text-light text-decoration-none col-11">International School of Tucson <br />1701 East Seneca Street, Tucson, AZ 85719</a></div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-2"><i className="bi bi-envelope-fill m-2 border p-2" ></i></div>
                      <div className="col-10"></div>
                    </div>
                  </div>
              </section>
            </div>
          </div>
        </div>
        <div className="row ">
            <p className="m-0 pt-4 text-center text-secondary">&copy; 2015- Tucson Japanese Language School All rights reserved.</p>
        </div>
      </footer> */}