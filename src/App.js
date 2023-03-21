import react from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import About from './component/About';
import Messages from './component/Messages';
import NavbarOffcanvas from "./component/navigation/NavbarBS";

export default function App() {
  return (
    <></>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);