import React from "react";
import { SiLinkedin, SiGmail, SiGithub } from 'react-icons/si';


export default function Inicio(props) {
  return (
    <main>
      <div className="text-center inicio-main">
        <div className="inicio-content">
          <h1 className="shadow-1">Contacto</h1>
          
          <div className="contact-buttons">
            <a className="shadow-1" href="mailto:facugastonbarral@gmail.com"><SiGmail className="k-icon contact-icon"/></a>
            <a className="shadow-1" href="https://www.linkedin.com/in/facundobarral/" target="_blank" rel="noreferrer"><SiLinkedin className="k-icon contact-icon"/></a>
            <a className="shadow-1" href="https://github.com/fvkugit" target="_blank" rel="noreferrer"><SiGithub className="k-icon contact-icon"/></a>
          </div>
        </div>
      </div>
    </main>
  );
}
