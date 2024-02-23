import React from "react";
import about from "@/app/Style/about.module.css";
import Image from "next/image";
import next from "@/app/images/next.png";
import htmlcssjs from "@/app/images/htmlcssjs.png";
import bootstrap from "@/app/images/bootstrap.png";
import react from "@/app/images/react.png";

const page = () => {
  return (
    <>
      <div className={about.container}>
        <div className={about.about}>
          <h1>
            <span>About Me</span>
          </h1>
        </div>
        <div className={about.container2}>
          <div className={about.info}>
            <h1>
              Zahi<span>d</span> <span>K</span>han
            </h1>
            <h2>
              I <span>Am</span> Front<span>end</span> Developer
            </h2>

            <p>
              Hello, I'm Khan Zahid, a passionate frontend developer with a
              focus on creating engaging and user-friendly web experiences. I
              thrive on turning complex design concepts into fully functional
              and responsive web applications. My dedication to writing clean,
              organized, and sustainable code is reflected in my work.
            </p>

            <h2>
              <span>Qualifications</span>
            </h2>
            <ul>
              <li>
                Bachelor's Degree in Inforfation Technology, Mumbai University
              </li>
              <li>
                1+ years of professional experience in frontend development
              </li>
              <li>
                Strong understanding of web development concepts and best
                practices
              </li>
            </ul>
          </div>
          <div className={about.experience}></div>
        </div>
        <div className={about.skill}>
          <h2>
            <span>Skills</span>
          </h2>
          <br />
          <br />

          <div className={about.skillpng}>
            <Image src={react} width={80} height={80} alt="React.js image" />
            <h2>React.js</h2>
            <br />
            <Image src={next} width={50} height={50} alt="Next.js image" />
            <h2>Next.js</h2>
            <br />
            <Image
              src={htmlcssjs}
              width={250}
              height={80}
              alt="Html,Css,javascript img"
            />
            <br />
            <Image
              src={bootstrap}
              width={200}
              height={200}
              alt="bootstrap image"
            />
          </div>
        </div>
        <div className={about.getintouch}>
          <h3>
            <span>Want To Know More About Me?</span>
          </h3>
          <h4>Get in Touch</h4>
          <h2>8169413149</h2>
        </div>
        <div className={about.testimonal}>
          <div className="slidecontainer"></div>
        </div>
      </div>
    </>
  );
};

export default page;
