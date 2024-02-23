import React from "react";
import hero from "@/app/Style/hero.module.css";
import Image from "next/image";
import dev from "@/app/images/dev.png";

const Hero = () => {
  return (
    <>
      <div className={hero.conatiner}>
        <div className={hero.heropng}>
          <Image
            src={dev}
            alt="developerimage"
            id={hero.developerimg}
            width={450}
            height={700}
            priority={true}
          />
        </div>

        <div className={hero.info}>
          <h1 data-text="ZAHID KHAN" className={hero.developername}>
            ZAHID KHAN
          </h1>
          <h1>
            <span>Fro</span>ntEn<span>d</span> Deve<span>lo</span>per
            <br /> Website Builder<span> & </span>Designer
          </h1>
          <p>
            I build creative, effective & Eye-Catching <br /> Website & Mobile
            Responsive Design.
          </p>
          <div className={hero.call}>
            <h2>
              <span>Call me +91</span> 8169413149
            </h2>
          </div>
          <button className={hero.getbutton}>
            <a href="resume.pdf" download>
              <span> Get</span> Resume
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
