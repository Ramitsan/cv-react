import React from "react";
import './skills-and-tools.css';
import star from '../../assets/star.png';

const skills = ['HTML5', 'CSS3', 'JavaScript (ES6)', 'jQuery (plugins)', 'BEM', 'SASS (SCSS)', 'Accessibility (a11y)', 'PHP7', 'SQL', 'SPA, OOP, MVP', 'React, React Router', 'Redux, Redux Toolkit', 'TypeScript', 'Node.js', 'Nest.js'];
const tools = ['Git', 'VS Code', 'npm', 'Adobe Photoshop, Lightroom, Figma', 'DevTools', 'Gulp, Webpack', 'Pixel Perfect', 'WebP', 'MySQL', 'Docker', 'React DevTools', 'Redux DevTools', 'REST API', 'Axios', 'Jest', 'React Testing Library'];

export function SkillsAndTools() {  
  return (
    <section className="skills-and-tools">
        <div className="skills">
          <h2 className="heading heading--second-level">Skills</h2>
          <ul className="skills__list">
            {skills.map((skill, index) => <li key={index} className="skills__item">{skill}</li>)}
          </ul>
        </div>

        <div className="tools">
          <h2 className="heading heading--second-level">Tools</h2>
          <ul className="tools__list">           
            {tools.map((tool, index) => <li key={index} className="tools__item">{tool}</li>)}
          </ul>
        </div>
        <div className="star-image">
          <img src={star} alt="" />
        </div>
      </section>
  )
}