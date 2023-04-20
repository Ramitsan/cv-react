import React from "react";
import { IProject } from '../../interfaces';
import './project.css';

type ProjectProps = {
  project: IProject;
}

export function Project({ project }: ProjectProps) {
  const { link, title, previewImage, technologies, details } = project;

  { console.log(`assets/projects/${previewImage}`) };

  return (
    <figure className="projects__item">
      <a className="project__link" href={link} target="_blank">
        <h3 className="heading heading--third-level">{title}</h3>
        <img src={`assets/projects/${previewImage}`} alt={title} />      
      </a>
      <figcaption className="technology">{technologies}
        <span className="technology__details">{details}</span>
      </figcaption>
    </figure>
  )
}

