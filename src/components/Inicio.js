import React from "react";
import imageLogo from '../image/logo_cafe.png';

export default function Inicio(props) {
  return (
    <main>
      <div className="text-center inicio-main">
        <div className="inicio-content">
          <img className="inicio-logo" src={imageLogo} alt="" />
          <h1 className="shadow-1">Facundo Barral</h1>
          <p className="shadow-1">Desarrollador de Software</p>
          <div className="know-icons">
            <i className="devicon-html5-plain colored shadow-1 k-icon"><span className="tooltiptext">HTML5</span></i>
            <i className="devicon-css3-plain colored shadow-1 k-icon"><span className="tooltiptext">CSS</span></i>
            <i className="devicon-bootstrap-plain colored shadow-1 k-icon"><span className="tooltiptext">Bootstrap</span></i>
            <i className="devicon-javascript-plain colored shadow-1 k-icon"><span className="tooltiptext">JavaScript</span></i>
            <i className="devicon-react-original colored shadow-1 k-icon"><span className="tooltiptext">React</span></i>
            <i className="devicon-nodejs-plain colored shadow-1 k-icon"><span className="tooltiptext">NodeJS</span></i>
            <i className="devicon-express-original colored shadow-1 k-icon"><span className="tooltiptext">Express</span></i>
            <i className="devicon-php-plain colored shadow-1 k-icon colored shadow-1 k-icon"><span className="tooltiptext">PHP</span></i>
            <i className="devicon-python-plain colored shadow-1 k-icon"><span className="tooltiptext">Python</span></i>
            <i className="devicon-mysql-plain colored shadow-1 k-icon"><span className="tooltiptext">MySQL</span></i>
            <i className="devicon-lua-plain-wordmark colored shadow-1 k-icon"><span className="tooltiptext">Lua (gLua)</span></i>
            <i className="devicon-git-plain colored shadow-1 k-icon"><span className="tooltiptext">Git</span></i>
          </div>
          <h2 className="shadow-1">Sobre mi</h2>
          <div className="bg-text">
          <p >Hola! Soy una persona a la cual le apasiona la tecnologia y la programaci??n, 
          me gusta estar en constante aprendizaje con el fin de mejorar mis conocimientos y mantenerme actualizado. 
         </p>
         <p> Me encuentro recibido en la carrera terciaria de <strong>Tec. Sup. en Desarrollo de Software (2022) </strong> 
          y actualmente estoy en busca de trabajo con el fin de poder aportar mis habilidades al proyecto de la manera que se requiera. </p>
          </div>
        </div>
      </div>
    </main>
  );
}
