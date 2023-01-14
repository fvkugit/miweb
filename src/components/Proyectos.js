import React from "react";
import { PROYECTS } from '../data/proyects';

import { FaLink } from 'react-icons/fa';

export default function Proyectos() {
  return (
    <main>
      <div className="text-center main">
        <h1 className="shadow-1">Mis Proyectos</h1>
        <div className="projects">
          {PROYECTS.map((project) => (
            <div className="project" key={project.id}>
              <div className="project-title">
                <h3 className="shadow-1">{project.title}</h3>
                <div className="project-buttons project-git">
                  { project.repo && <a href={project.repo} target="_blank" rel="noreferrer"><i className="devicon-github-original shadow-1 k-icon"></i></a>}
                  { project.demo && <a href={project.demo} target="_blank" rel="noreferrer"><FaLink className="shadow-1 k-icon"/></a>}
                </div>
              </div>
              {project.tags.map((tag) => (
                <span className="project-tag" key={tag}>{tag}</span>
              ))}
              <img src={project.imagen} alt="" />
              <p>{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
