import { HEADER_MENU } from "../const";

console.log(HEADER_MENU)

export default function Nav({  }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark gnav"> 
        {/* <a className="navbar-brand" href="#">Navbar</a> */}
        <button className="navbar-toggler text-white " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          {/* <span className="navbar-toggler-icon text-light"></span> */}
          <i className="bi bi-list"></i>
        </button>
        <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
        <ul className="nav nav-pills nav-fill">
          {Object.keys(HEADER_MENU).map((key) => {
            const item = HEADER_MENU[key]
            return (
              <>
              {!item.dropdowns.length && (
                <li className="nav-item">
                  <a className="nav-link text-light" aria-current="page" href={item.link}>{item.title}</a>
                </li>
              )}
              {item.dropdowns.length && (
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle text-light" href="#" id={item.title} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {item.title}
                  </a>
                  <ul className="dropdown-menu" aria-labelledby={item.title}>
                    {item.dropdowns.map((dropdown) => {
                      return (
                        <li><a className="dropdown-item" href={dropdown.link}>{dropdown.title}</a></li>  
                      )
                    })}
                  </ul>
                </li>
                
              )}
              </>
            )
          })}
            {/* <li className="nav-item">
              <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li> */}
          </ul>
          {/* <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
        </div>
  </nav>
)}