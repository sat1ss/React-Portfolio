import React from "react";
import projects from "../../data/projects.json";
import style from "./Projects.module.css";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section className={style.container}>
      <h2 className={style.title}>Projekty</h2>
      <div className={style.projects}>
        {projects.map((project, projectIndex) => {
          return <ProjectCard project={project} key={projectIndex} />;
        })}
      </div>
    </section>
  );
}
