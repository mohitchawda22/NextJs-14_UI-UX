import Image from "next/image";
import React from "react";
function Footer() {
  return (
    <footer className="footer p-10 bg-white text-base-content dark:bg-white">
      <aside>
        <Image src="/logo1.png" alt="" width={40} height={40}></Image>
        <p>
          MKC Industries Ltd.
          <br />
          Providing reliable tech since 2003
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
}

export default Footer;
