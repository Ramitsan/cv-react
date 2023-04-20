import React from "react";
import { Project } from '../project/project';
import { projects} from '../../projects';
import './projects.css';

export function Projects() {
  return (
    <section className="projects">
      <h2 className="heading heading--second-level">My projects</h2>
      <div className="projects__list">
        {projects.map(project =>  <Project key={project.id} project={project} />)}
      </div>
    </section>
  )
}