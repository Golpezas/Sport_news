import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// Renderizar el componente principal App en el div con id 'root'
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);