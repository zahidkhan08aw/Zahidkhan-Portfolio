import React from "react";
import footer from "@/app/Style/footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className={footer.container}>
        <div className={footer.row}>
          <div className={footer.column} id={footer.company}>
            <h2>Zahid Khan</h2>
            <p>Frontend Website Developer</p>
            <h4>webxartist@gmail.com</h4>
            <h4>zahid8087137412@gmail.com</h4>
          </div>
          <div className={footer.column} id={footer.links}>
            <h2>Quick Links</h2>
            <li>
              <Link className={footer.linkss} href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={footer.linkss} href="/About">
                About
              </Link>
            </li>
            <li>
              <Link className={footer.linkss} href="/Project">
                Projects
              </Link>
            </li>
            <li>
              <Link className={footer.linkss} href="/Contact">
                Contact
              </Link>
            </li>
          </div>
          <div className={footer.column} id={footer.services}>
            <h2>Services</h2>
            <li>
              <Link className={footer.linkss} href="/">
                Website Building
              </Link>
            </li>
            <li>
              <Link className={footer.linkss} href="/">
                Website Designing
              </Link>
            </li>
            <li>
              <Link className={footer.linkss} href="/">
                Graphic Designing
              </Link>
            </li>
          </div>
          <div className={footer.column} id={footer.contact}>
            <h2>Contact</h2>
            <li>
              <Link className={footer.linkss} href="">
                WhatsApp
              </Link>
            </li>
            <li>
              <Link className={footer.linkss} href="">
                Form
              </Link>
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
