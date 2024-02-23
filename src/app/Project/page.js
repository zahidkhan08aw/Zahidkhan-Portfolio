import React from "react";
import Image from "next/image";
import projectpng from "@/app/images/projectpng.png";
import project from "@/app/Style/project.module.css";

const page = () => {
  return (
    <>
      <div className={project.container}>
        <div className={project.aboutproject}>
          <h1>
            <span>Projects</span>
          </h1>
        </div>
        <div className={project.upgradepng}>
          <Image
            className={project.upgrade}
            src={projectpng}
            height={250}
            width={350}
            alt="Projectpng"
          />
        </div>
        <div className={project.projects}>
          <h1>To Do App</h1>
          <a href="https://to-do-app-three-gules.vercel.app/">
            click and visit
          </a>
        </div>
        <div className={project.githublink}>
          <h1>
            <span>Github</span>
          </h1>
          <p>Visit Link :- github.com/zahidkkhan08aw</p>
        </div>
      </div>
    </>
  );
};

export default page;
