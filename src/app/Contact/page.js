"use client";
import React from "react";
import contact from "@/app/Style/contact.module.css";
import { useState } from "react";
import contactuspng from "@/app/images/contactuspng.png";
import Image from "next/image";

const page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [popup, setPopups] = useState("");

  const Submit = () => {
    console.log(name, email, company, number, message);
    let popup = document.getElementById("popup");
  };

  return (
    <>
      <div className={contact.contactcontainer}>
        <h1>
          <span>Contact Me</span>
        </h1>
        <div className={contact.container}>
          <div className={contact.contactpng}>
            <Image
              src={contactuspng}
              priority={true}
              height={444}
              width={445}
            />
          </div>
          <div className={contact.contactform}>
            <h1>
              <span>Any Query</span>
            </h1>
            <div className={contact.formcontent}>
              <div className={contact.content}>
                <label htmlFor="name">Name </label>
                <input
                  type="text"
                  name="name"
                  id={contact.name}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className={contact.content}>
                <label htmlFor="email">Gmail</label>
                <input
                  type="email"
                  name="email"
                  id={contact.email}
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className={contact.content}>
                <label htmlFor="company">Your Company</label>
                <input
                  type="text"
                  id={contact.company}
                  name="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  required
                />
              </div>
              <div className={contact.content}>
                <label htmlFor="number">Phone</label>
                <input
                  type="number"
                  name="number"
                  id={contact.number}
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  required
                />
              </div>
              <div className={contact.content}>
                <label htmlFor="textareaa">Your Message</label>
                <textarea
                  name="message"
                  id={contact.textareaa}
                  cols="30"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className={contact.button}>
                <button type="submit" id={contact.openpopup} onClick={Submit}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id={contact.popup}>
        <img src="tick.png" alt="" />
        <h2>Thank You!</h2>
        <p>Your Details has been Successfully Submitted. Thanks!</p>
        <button id={contact.closepopup} type="button">
          Ok done.
        </button>
      </div>
    </>
  );
};

export default page;
