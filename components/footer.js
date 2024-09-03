import { useLocale } from "../utils/locale";

export default function Footer({  }) {
  const { json } = useLocale()
  const lang = json.footer

  return (
      <footer className="text-dark p-3 bg-dark">
        <div class="container">
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
                      <div className="col-10"><a href="mailto:info@tucson.nihongo.hosyuko@gmail.com" className="link-light text-decoration-none">tucson.nihongo.hosyuko@gmail.com</a></div>
                    </div>
                  </div>
              </section>
            </div>
          </div>
        </div>
        <div className="row ">
            <p className="m-0 pt-4 text-center text-secondary">&copy; 2015- Tucson Japanese Language School All rights reserved.</p>
        </div>
      </footer>
)}