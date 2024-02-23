"use client";
import React from "react";
import Link from "next/link";
import navbarstyle from "@/app/Style/navbarstyle.module.css";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className={navbarstyle.navbar}>
      <div className={navbarstyle.logo}>
        <Link className={navbarstyle.brandname} href="/">
          Zahid coder
        </Link>
      </div>
      <ul className={navbarstyle.li}>
        <li>
          <Link className={navbarstyle.link} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={navbarstyle.link} href="About">
            About
          </Link>
        </li>
        <li>
          <Link className={navbarstyle.link} href="Project">
            Projects
          </Link>
        </li>
        <li>
          <Link className={navbarstyle.link} href="Contact">
            Contact me
          </Link>
        </li>
      </ul>
      <div className={navbarstyle.mainsocial}>
        <a
          href="https://www.instagram.com/zahidkhan.x08?igsh=MmVlMjlkMTBhMg=="
          target="_blank"
        >
          <FaInstagram
            color="#E1306C"
            fontSize={26}
            className={navbarstyle.socialicon}
            id="instagram"
          />
        </a>
        <a href=" https://wa.me/qr/AKLHUPYCS3WCL1 " target="_blank">
          <FaWhatsapp
            color="green"
            fontSize={26}
            className={navbarstyle.socialicon}
            id="whatsapp"
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
