import cafayate from "../image/proyecto-cafayate.png";
import rescataditos from "../image/rescataditos.png";
import refugio from "../image/refugio.png";
import alkemy from "../image/proyecto-alkemy.png";

var PROYECTS = [
  {
    id: 1,
    title: "Alkemy ONG",
    imagen: alkemy,
    tags: ["CSS", "HTML", "JS", "NODEJS"],
    repo: "https://github.com/alkemyTech/OT196-Client",
    desc: "Proyecto grupal desarrollado en la Aceleración Alkemy (FullStack JS), donde se busca formar un perfil Job-Ready.",
  },
  {
    id: 2,
    title: "Proyecto Cafayate",
    imagen: cafayate,
    tags: ["CSS", "HTML", "PHP"],
    repo: "https://github.com/fvkugit/web-turismo-cafayate",
    demo: "https://fvku-cafayate.000webhostapp.com/",
    desc: "Proyecto de la materia curricular Practicas Profesionalizantes (II). Sitio web destinado a facilitar y promover información de interes turistico sobre la ciudad de Cafayate.",
  },
  {
    id: 3,
    title: "Refugio de Mascotas",
    imagen: refugio,
    tags: ["CSS", "HTML", "JS"],
    repo: "https://github.com/fvkugit/tpocodoacodo",
    demo: "https://refugiorescataditos.netlify.app/",
    desc: "Sitio web para refugio de mascotas ficticio. Desarrollado como trabajo para el curso de Codo a Codo 4.0",
  },
  {
    id: 4,
    title: "Rescataditos App",
    imagen: rescataditos,
    tags: ["CSS", "HTML", "JS", "NODEJS"],
    repo: "https://github.com/fvkugit/rescataditos-client",
    demo: "https://rescataditos-client.herokuapp.com/",
    desc: "Proyecto de la materia curricular Practicas Profesionalizantes (I). Sitio web destinado a documentar información sobre las mascotas rescatadas.",
  },
];

export {PROYECTS};
