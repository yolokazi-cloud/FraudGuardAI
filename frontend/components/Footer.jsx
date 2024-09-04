// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="dark">
      <div id="copyrights" className="bg-transparent">
        <div className="container">
          <div className="row justify-content-between col-mb-30">
            <div className="col-12 col-md-auto text-center text-md-start">
              Copyrights &copy; 2023 All Rights Reserved by Fraudguardai
              <br />
              <div className="copyright-links">
                <a href="#">Terms of Use</a> / <a href="#">Privacy Policy</a>
              </div>
            </div>
            <div className="col-12 col-md-auto text-center text-md-end">
              <div className="copyrights-menu copyright-links">
                <a href="#">Home</a>/<a href="#">About Us</a>/<a href="#">Team</a>/<a href="#">Clients</a>/<a href="#">FAQs</a>/<a href="#">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
