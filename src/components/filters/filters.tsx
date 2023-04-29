import React, { useState } from "react";
import './filters.css';

interface IFilters {
  filterTitle: string;
  onClickFilter: (i: string) => void;
}

export function Filters({filterTitle, onClickFilter} : IFilters) {
  const technologies = ['All', 'HTML', 'CSS', 'SCSS', 'Gulp', 'adaptive', 'JavaScript', 'PHP', 'SQL', 'SPA', 'TypeScript', 'React', 'Webpack'];

  return (
    <div className="filters">
        {technologies.map((item, i) => {
          return <span key={i} className={`filters__item ${filterTitle === item ? 'filters__item--active' : ''}`}
            onClick={() => {
              onClickFilter(item);
            } }>{item}</span>
        }
        )}
      </div>
  )
}