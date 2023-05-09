import React from "react";
import FooterStyle from "./Footer.module.scss";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className={FooterStyle.footer}>
      <div className={FooterStyle.inner_footer}>
        <div>
          <Link to="">Terms of Service</Link>
          <Link to="">Privacy Policy</Link>
          <Link to="">Cookie Policy</Link>
        </div>
        <div>
          <Link to="">Accessibility</Link>
          <Link to="">Ads info</Link>
          <li>More...</li>
        </div>
        <p>© 2023 Twitter, Inc.</p>
      </div>
    </div>
  );
};
