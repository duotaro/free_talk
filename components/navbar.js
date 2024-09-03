import Link from "next/link";

export default function Navigation({  }) {

  let textClass = "text-secondary me-auto mb-2 mb-lg-0 ms-lg-4"
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
            <Link href={`/`} className="navbar-brand">アリゾナ学園補習授業校</Link>
            <p className={textClass}><small>アリゾナ学園スクールは日本の学校文化を学べる週一の補習授業校です。</small></p>
            <p className="text-right">
              <div className="dropdown">
                <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Language
                </a>

                <ul className="dropdown-menu">
                  <li className={textClass}><Link href="/" locale="ja" passHref>日本語</Link></li>
                  <li className={textClass}><Link href="/" locale="en" passHref>English</Link></li>
                </ul>
              </div>
           </p>
        </div>
    </nav>
  );
}