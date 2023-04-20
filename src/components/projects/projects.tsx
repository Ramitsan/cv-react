import React from "react";
import { Project } from '../project/project';
import './projects.css';

export function Projects() {
  return (
    <section className="projects">
      <h2 className="heading heading--second-level">My projects</h2>
      <div className="projects__list">
        <Project />

      </div>
    </section>
  )
}