import React from "react";
import ReactDOM from 'react-dom/client';

function App() {
    // document.createElement...
    return <h1>Hola Mundo</h1>
}

//El "root" es el elemento que se encuentra en index.html
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App></App>
    </React.StrictMode>
)