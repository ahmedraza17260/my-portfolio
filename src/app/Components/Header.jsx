"use client";

import { useEffect, useState } from "react";

const Header = ({ data }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Ensures hydration compatibility
  }, []);

  if (!data || !mounted) return null;

  const { name, occupation, description, social } = data;

  const networks = social?.map((network) => (
    <li key={network.name}>
      <a rel="noopener noreferrer" target="_blank" href={network.url}>
        <i className={network.className}></i>
      </a>
    </li>
  ));

  return (
    <header id="home">
      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">I'm {name}.</h1>
          <h3>
            <span>{occupation}</span>
            <br />
            {description}
          </h3>
          <hr />
          <ul className="social">{networks}</ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
