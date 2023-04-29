import React from "react";
import { IProject } from '../../interfaces';
import './project.css';

type ProjectProps = {
  project: IProject;
}

export function Project({ project }: ProjectProps) {
  const { link, title, previewImage, technologies, details, teamProject } = project;

  return (
    <figure className="projects__item">
      <a className="project__link" href={link} target="_blank">
        <h3 className="heading heading--third-level">{title}</h3>
        <img src={`assets/projects/${previewImage}`} alt={title} />      
      </a>
      <figcaption className="technologies">{technologies.map(it => <span className="technology">{it}</span>)} <br/>
        <span className="technology__details">{details}</span>
      </figcaption>
      {teamProject  &&
      <p className="project__team">team project</p>}
    </figure>
  )
}

