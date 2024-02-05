import logo from './logo.svg';
import './App.css';
import Home from './pages/home/Home';
import About from './pages/about/About';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from './components/Header/Header.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/a-propos" element={<About/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
