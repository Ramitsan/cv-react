import React from "react";
import { Header } from './components/header/header';
import { SkillsAndTools } from './components/skills-and-tools/skills-and-tools';
import { Projects } from './components/projects/projects';
import './style.css';

export default function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <SkillsAndTools />
        <Projects />

      </main>
    </div>
  )
}