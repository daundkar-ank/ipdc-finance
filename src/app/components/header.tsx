// components/Header.jsx
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "@/assets/logo/ipdcLogo.png";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link href="/" className="navbar-brand">
            <Image src={logo} alt="Company Logo" height="40" />
          </Link>

          <div className="expand navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item text-xs font-bold">
                <Link href="/retail" className="nav-link">
                  RETAIL
                </Link>
              </li>
              <li className="nav-item text-xs font-bold">
                <Link href="/sme" className="nav-link">
                  SME
                </Link>
              </li>
              <li className="nav-item text-xs font-bold">
                <Link href="/corporate" className="nav-link">
                  CORPORATE
                </Link>
              </li>
              <li className="nav-item text-xs font-bold">
                <Link href="/about" className="nav-link">
                  ABOUT US
                </Link>
              </li>
              <li className="nav-item text-xs font-bold">
                <Link href="/covid19" className="nav-link">
                  COVID 19
                </Link>
              </li>
              <li className="nav-item text-xs font-bold">
                <Link href="/campaigns" className="nav-link">
                  CAMPAIGNS
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <button className="btn btn-outline-primary me-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </button>
              <Link href="/service" className="btn btn-primary">
                iSERVICE
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
