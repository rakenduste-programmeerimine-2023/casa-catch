import React from 'react';
import "./components.css"

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-content">
        Powered by Roland
        <div className="footer-links">
          <a href="https://github.com/rakenduste-programmeerimine-2023/casa-catch">GitHub</a>
          <a href="https://www.kv.ee/">KV.ee</a>
          <a href="https://www.city24.ee/">City24.ee</a>
          <a href="https://rendin.ee/">Rendin.ee</a>
          <a href="http://kinnisvara24.ee/">KV24.ee</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

