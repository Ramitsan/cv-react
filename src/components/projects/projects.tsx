import React from "react";
import { Project } from '../project/project';
// import { projects } from '../../data-projects';
import './projects.css';
import { IProject } from "../../interfaces";

interface IProjects {
  projects: Array<IProject>;
}

export function Projects({projects}: IProjects) { 
  return (
    <section className="projects">
      <h2 className="heading heading--second-level">My projects</h2>     
      <div className="projects__list">
        {projects.map(project => <Project key={project.id} project={project} />)} 
      </div>
    </section>
  )
}