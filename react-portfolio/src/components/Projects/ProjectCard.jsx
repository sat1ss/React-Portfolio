import React from "react";
import style from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export function ProjectCard(props) {
  const { project } = props;

  console.log(getImageUrl(project.imageSrc));
  return (
    <div className={style.container}>
      <img
        src={getImageUrl(project.imageSrc)}
        alt={`Zdjęcie projektu: ${project.title}`}
        className={style.image}
      />
      <h3 className={style.title}>{project.title}</h3>
      <p className={style.description}>{project.description}</p>
      <ul className={style.skills}>
        {project.skills.map((skill, skillIndex) => {
          return (
            <li key={skillIndex} className={style.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={style.links}>
        <a className={style.link} href={project.demo} target="_blank">
          Strona
        </a>
        <a className={style.link} href={project.source} target="_blank">
          Kod
        </a>
      </div>
    </div>
  );
}
