import React from "react";
import ReactDOM from 'react-dom/client';

import "./styles.css";
import { HelloWorldApp } from "./HelloWorldApp";
import { FirstApp } from "./FirstApp";
import { PropsApp } from "./PropsApp";


//El "root" es el elemento que se encuentra en index.html
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelloWorldApp/>
        <FirstApp/>
        <PropsApp title="Hola Souy Goku" subtitle={123} subtitle2="123"/>
    </React.StrictMode>
)