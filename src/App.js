import { Routes, Route, Navigate } from 'react-router-dom';
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts"
import Projects from "./pages/Projects/Projects";
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      {
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/*" element={<Navigate to="/home" />} />
        </Routes>
      }
    </div>
  );
}

export default App;
