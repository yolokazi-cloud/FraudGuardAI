// components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header id="header">
      <div id="header-wrap">
        <div className="container">
          <div className="header-row">
            <div id="logo">
              <a href="/">
                <img className="logo-default" src="/logo.png" alt="Logo" />
                <img className="logo-dark" src="/logo.png" alt="fgai Logo" />
              </a>
            </div>
            <div className="header-misc">
              <a href="#" className="button bg-white text-dark button-light button-rounded color">
                Tamara
              </a>
            </div>
            <div className="primary-menu-trigger">
              <button className="cnvs-hamburger" type="button" title="Open Mobile Menu">
                <span className="cnvs-hamburger-box">
                  <span className="cnvs-hamburger-inner"></span>
                </span>
              </button>
            </div>
            <nav className="primary-menu with-arrows">
              <ul className="menu-container">
                <li className="menu-item current">
                  <a className="menu-link" href="/">
                    <div>Home</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a className="menu-link" href="/statistics">
                    <div>Statistics</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a className="menu-link" href="/settings">
                    <div>Settings</div>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="header-wrap-clone"></div>
    </header>
  );
};

export default Header;
