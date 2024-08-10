import React from "react";
import { IProject } from '../../interfaces';
import './project.css';

type ProjectProps = {
  project: IProject;
}

export function Project({ project }: ProjectProps) {
  const { linkToRepository, linkToDeploy, title, year, previewImage, technologies, details, teamProject } = project;

  return (
    <figure className="projects__item">
      <span className="project__year">{year}</span>
      <h3 className="heading heading--third-level">{title}</h3>
      <div className="project__image-block">
        <img className="project__image" src={`assets/projects/${previewImage}`} alt={title} />
        <div className="project__overlay"></div>
        {linkToDeploy && <a className="project__link project__link--deploy" href={linkToDeploy} target="_blank">Deploy</a>}
        {linkToRepository && <a className="project__link  project__link--repo" href={linkToRepository} target="_blank">Repository</a>}
      </div>
  
      <figcaption className="technologies">{technologies.map(it => <span className="technology">{it}</span>)} <br />
        <span className="technology__details">{details}</span>
      </figcaption>
      {teamProject &&
        <p className="project__team">team project</p>}
    </figure>
  )
}

