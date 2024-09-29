import React, { useMemo, useState } from "react";
import { Project } from '../project/project';
import { projects } from '../../data-projects';
import './projects.css';
import { Filters } from "../filters/filters";


export function Projects() {
  const [filterTitle, setFilterId] = useState('All');

  const filteredProjects = useMemo(() => {
    return projects.filter(project => project.technologies.find(tec => filterTitle == 'All' ? true : tec == filterTitle) != null)
  }, [filterTitle]);

  return (
    <section className="projects">
      <h2 className="heading heading--second-level">My projects</h2>

      <Filters filterTitle={filterTitle} onClickFilter={(id) => {
        setFilterId(id);
      }} />
      <div className="projects__list">
        {filteredProjects.sort((a, b) => Number(b.year) - Number(a.year))
          .sort((a, b) => Number(b.id) - Number(a.id))
          .map(project => <Project key={project.id} project={project} />)}
      </div>
    </section>
  )
}