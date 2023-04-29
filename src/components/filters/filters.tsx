import React, { useState } from "react";
import { projects } from '../../data-projects';
import './filters.css';

interface IFilters {
  filterId: string;
  onClickFilter: (i: string) => void;
}

export function Filters({filterId, onClickFilter} : IFilters) {
  const technologies = ['All', 'HTML', 'CSS', 'SCSS', 'adaptive', 'JavaScript', 'PHP', 'SQL', 'SPA', 'TypeScript', 'React', 'Webpack'];

  return (
    <div className="filters">
        {technologies.map((item, i) => {
          return <span key={i} className={`filters__item ${filterId === item ? 'filters__item--active' : ''}`}
            onClick={() => {             
              onClickFilter(item);
            }}>{item}</span>
        }
        )}
      </div>
  )
}