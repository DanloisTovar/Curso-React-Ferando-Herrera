import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';
import { PrimerComponente } from './PrimerComponente';
import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp nombre="Danlois" saludo="Hola Soy," numero={123} />
        <PrimerComponente />
    </React.StrictMode>,
);
