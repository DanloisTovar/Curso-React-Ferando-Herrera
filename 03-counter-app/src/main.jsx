import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
    return <div>Hola Mundo!!!</div>;
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
