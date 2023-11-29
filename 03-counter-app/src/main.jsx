import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';
import { PrimerComponente } from './PrimerComponente';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp />
        <PrimerComponente />
    </React.StrictMode>,
);
