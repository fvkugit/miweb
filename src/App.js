import "./App.css";
import { Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import Proyectos from "./components/Proyectos";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Base from "./components/Base";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Base />}>
          <Route index element={<Inicio />} />
          <Route path="proyectos" element={<Proyectos />} />
          <Route path="contacto" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
