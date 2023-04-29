import React, { useMemo, useState } from "react";
import { Header } from './components/header/header';
import { SkillsAndTools } from './components/skills-and-tools/skills-and-tools';
import { Filters } from './components/filters/filters';
import { Projects } from './components/projects/projects';
import { WorkAndEducation } from './components/work-and-education/work-and-education';
import { Footer } from './components/footer/footer';
import { ButtonUp } from './components/button-up/button-up';
import { projects } from './data-projects';
import './style.css';

export default function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <main>
          <SkillsAndTools />         
          <Projects />
          <WorkAndEducation />
        </main>
        <Footer />
      </div>
      <ButtonUp />
    </>
  )
}