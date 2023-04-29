import React, { useMemo, useState } from "react";
import { Project } from '../project/project';
import { projects } from '../../data-projects';
import './projects.css';
import { Filters } from "../filters/filters";


export function Projects() { 
  const [filterId, setFilterId] = useState('All');

  const filteredProjects = useMemo(() => {
    return projects.filter(project => project.technologies.find(tec => filterId == 'All' ? true : tec == filterId) != null)
  }, [filterId]);
  
  return (
    <section className="projects">
      <h2 className="heading heading--second-level">My projects</h2> 

      <Filters filterId={filterId} onClickFilter={(id) => {
            setFilterId(id);
          }} />     
      <div className="projects__list">        
        {filteredProjects.map(project => <Project key={project.id} project={project} />)} 
      </div>
    </section>
  )
}