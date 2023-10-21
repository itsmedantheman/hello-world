import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer__main">
      <div className="footer__container p-x p-y">
        <div className="footer__logo">
          <Image
            src="/logo.png"
            alt="logo"
            width={30}
            height={30}
            className="object-contain"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
