"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "@/assets/logo/ipdcLogo.png";
import Image from "next/image";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isClient, setIsClient] = useState(false); // Fix hydration issue

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Prevent hydration mismatch

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="flex gap-1">
            {/* Menu Icon for Small Screens */}
            <button
              className="d-block d-lg-none"
              type="button"
              onClick={() => setIsDrawerOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm0-4a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm0-4a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11z"
                />
              </svg>
            </button>
            <Link href="/" className="navbar-brand">
              <Image src={logo} alt="Company Logo" height="40" />
            </Link>
          </div>

          {/* Navbar Links - Hide on Small Screens */}
          <div className="d-none d-lg-block">
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
          </div>

          {/* Drawer Menu */}
          {isDrawerOpen && (
            <div
              className="offcanvas offcanvas-start show"
              style={{ width: "250px", background: "white" }}
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title">Menu</h5>
                <button
                  className="btn-close"
                  onClick={() => setIsDrawerOpen(false)}
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      href="/retail"
                      className="nav-link"
                      onClick={() => setIsDrawerOpen(false)}
                    >
                      RETAIL
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/sme"
                      className="nav-link"
                      onClick={() => setIsDrawerOpen(false)}
                    >
                      SME
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/corporate"
                      className="nav-link"
                      onClick={() => setIsDrawerOpen(false)}
                    >
                      CORPORATE
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/about"
                      className="nav-link"
                      onClick={() => setIsDrawerOpen(false)}
                    >
                      ABOUT US
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/covid19"
                      className="nav-link"
                      onClick={() => setIsDrawerOpen(false)}
                    >
                      COVID 19
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/campaigns"
                      className="nav-link"
                      onClick={() => setIsDrawerOpen(false)}
                    >
                      CAMPAIGNS
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* Search & iSERVICE Button */}
          <div className="d-flex">
            <button className="btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#ED017F"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </button>
            <button className="flex items-center bg-pink-500 text-white px-2 py-0 rounded font-medium hover:bg-pink-600 transition">
              <p className="text-xs mb-0">iSERVICE</p>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
