import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./styles.css"
import App from './App';
import {BrowserRouter}from "react-router-dom"

//ReactDOM.createRoot(document.querySelector("#root")).render(<React.StrictMode><App /></React.StrictMode>);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
)

