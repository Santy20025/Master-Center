import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './bootstrap.min.css'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Home } from './pages/Auth/Home';
import { Header } from './pages/Auth/Header';
import { Inicio } from './pages/Auth/Inicio';
import { About } from './pages/Auth/About';
import { Service } from './pages/Auth/Service';
import { Contact } from './pages/Auth/Contact';
import { Footer } from './pages/Auth/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home/>
    <Header/>
    <Inicio/>
    <About/>
    <Service/>
    <Contact/>
    <Footer/>
  </React.StrictMode>
);

