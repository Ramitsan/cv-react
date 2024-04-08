import React from "react";
import { IProject } from '../../interfaces';
import './project.css';

type ProjectProps = {
  project: IProject;
}

export function Project({ project }: ProjectProps) {
  const { link, title, year, previewImage, technologies, details, teamProject } = project;

  return (
    <figure className="projects__item">
      <span className="project__year">{year}</span>
      {/* <a className="project__link" href={link} target="_blank"> */}
      <h3 className="heading heading--third-level">{title}</h3>
      <div className="project__image-block">
        <img className="project__image" src={`assets/projects/${previewImage}`} alt={title} />
        <div className="project__overlay"></div>
        <a className="project__link project__link--repo" href="#">Repository</a>
        <a className="project__link project__link--deploy" href="#">Deploy</a>
      </div>
      {/* </a> */}
      <figcaption className="technologies">{technologies.map(it => <span className="technology">{it}</span>)} <br />
        <span className="technology__details">{details}</span>
      </figcaption>
      {teamProject &&
        <p className="project__team">team project</p>}
    </figure>
  )
}

