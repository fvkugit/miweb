import React from "react";
import { SiLinkedin, SiGmail, SiGithub } from 'react-icons/si';


export default function Inicio(props) {
  return (
    <main>
      <div className="text-center inicio-main">
        <div className="inicio-content">
          <h1 className="shadow-1">Contacto</h1>
          
          <div className="contact-buttons">
            <a className="shadow-1" href="/"><SiGmail className="k-icon contact-icon"/></a>
            <a className="shadow-1" href="/"><SiLinkedin className="k-icon contact-icon"/></a>
            <a className="shadow-1" href="/"><SiGithub className="k-icon contact-icon"/></a>
          </div>
        </div>
      </div>
    </main>
  );
}
