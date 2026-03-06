// // src/App.jsx
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// import Calculator from './components/Calculator'
// import SumArray from './components/SumArray' // <--- Ne pas oublier l'import !
// import './App.css'
// import Users from './components/Users' // Adjust the path if your file is named differently
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import FormPage from "./components/FormPage";

// const Home = () => (
//   <div style={{ padding: '20px' }}>
//     <h1>Bienvenue sur mon App</h1>
//     <p>Choisissez un exercice dans le menu ci-dessus.</p>
//   </div>
// )

// function App() {
//   return (
//     <Router>
//       <div className="app-container">
//         <nav className="navbar">
//           <Link to="/">Accueil</Link>
//           <Link to="/calculator">Calculatrice</Link>
//           <Link to="/sum">Somme Tableau</Link>
//           <Link to="/users">Utilisateurs (API)</Link> 
//           <Link to="/FormPage">Form</Link> 
           
//         </nav>

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/calculator" element={<Calculator />} />
//           <Route path="/sum" element={<SumArray />} />
//           <Route path="/users" element={<Users />} /> 
//           <Route path="/FormPage" element={<FormPage />} />
//         </Routes>
//       </div>
//     </Router>
//   )
// }

// export default App

// src/App.jsx
// Garde tes imports actuels
// App.jsx (Modifié)
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

import Navbar from './components/Navbar';
import Calculator from './components/Calculator';
import SumArray from './components/SumArray';
import Users from './components/Users';
import FormPage from "./components/FormPage";
import CrudPersonnes from './components/CrudPersonnes'; 
import './App.css';

// Thème MUI (optionnel : tu peux mettre 'dark' ici si tu veux que MUI s'adapte à ton design sombre)
const theme = createTheme({ 
  palette: { 
    mode: 'light' 
  } 
});

const Home = () => (
  <div className="container-fluid mt-5">
    <div className="p-5 mb-4 bg-light rounded-3 shadow text-dark">
      <h1>Bienvenue sur mon App</h1>
      <p className="lead">Choisissez un exercice dans le menu ci-dessus pour commencer.</p>
    </div>
  </div>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline réinitialise les marges par défaut du navigateur */}
      <CssBaseline /> 
      <Router>
        <div className="app-container min-vh-100">
          <Navbar />
          
          {/* Utilisation de container-fluid au lieu de container 
            pour enlever les grandes marges latérales de Bootstrap.
          */}
          <div className="container-fluid mt-4 px-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/sum" element={<SumArray />} />
              <Route path="/users" element={<Users />} /> 
              <Route path="/FormPage" element={<FormPage />} />
              <Route path="/crud" element={<CrudPersonnes />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;