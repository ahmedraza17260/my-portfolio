"use client";

import React from "react";
// import "../globals.css"; // If global styles are in src/globals.css

// import "../../styles/global.css";




const Footer = ({ data }) => {
  const networks = data?.social?.map((network) => (
    <li key={network.name}>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={network.url}
      >
        <i className={network.className}></i>
      </a>
    </li>
  ));

  return (
    <>
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">{networks}</ul>

            <ul>
              <li>
                Design by{" "}
                <a
                  title="Ahmed Raza"
                  href="https://ahmedraza-portfolio.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ahmed Raza
                </a>
              </li>
            </ul>
          </div>

          {/* Go to Top Button */}
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <h3>
            <a
              href="https://github.com/ahmedraza17260"
              rel="noopener noreferrer"
              target="_blank"
            >
              &copy; {new Date().getFullYear()} Ahmed Raza
            </a>
          </h3>
        </div>
      </footer>

      {/* WhatsApp floating button */}
      <a
        className="whatsapp_float"
        href="https://wa.me/923232190116?text=Hi%20There!"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp whatsapp-icon"></i>
      </a>
    </>
  );
};

export default Footer;
