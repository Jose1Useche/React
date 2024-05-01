import React from "react";
import ReactDOM from 'react-dom/client';

import { HelloWorldApp } from "./HelloWorldApp";


//El "root" es el elemento que se encuentra en index.html
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelloWorldApp></HelloWorldApp>
    </React.StrictMode>
)