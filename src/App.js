import logo from './logo.svg';
import './App.css';
import  Home  from './view/Home';
import { Routes, Route,  } from "react-router-dom";
import PersonajesAPI from './view/PersonajesAPI';
import { PlaneApi } from './components/api/Planetas';

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} > </Route>
        <Route path="/personajesAPI" element={<PersonajesAPI />} > </Route>
        <Route path="/planetasAPI" element={<PlaneApi />} > </Route>

      </Routes>
    
  );
}

export default App;