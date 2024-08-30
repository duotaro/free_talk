import Link from "next/link.js";

export default function Footer({  }) {
  return (
      <footer className="text-dark p-3 bg-dark">
        <section className="justify-content-between p-2 text-white">

              <div className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">CONTACT INFO</h6>
                <hr
                    className="mb-1 mt-0 d-inline-block mx-auto"
                    />
                <p><i className="bi bi-geo-alt m-2 border p-2"></i> <a className="text-light text-decoration-none">Tempe AZ</a></p>
                <p><i className="bi bi-envelope-fill m-2 border p-2" ></i> <a href="mailto:info@arizonagakuenschool.org" className="link-light text-decoration-none">info@arizonagakuenschool.org</a></p>
                <p><i className="bi bi-telephone m-2 border p-2"></i> <a href="tel:480-345-4522" className="link-light text-decoration-none">480-345-4522</a></p>
                <p><i className="bi bi-link-45deg m-2 border p-2"></i> <a href="arizonagakuenschool.org" className="link-light text-decoration-none">arizonagakuenschool.org</a></p>
              </div>
        </section>
        <div className="row ">
            <p className="m-0 pt-4 text-center text-white">&copy; Arizona Gakuen School All rights reserved.</p>
        </div>
      </footer>
)}