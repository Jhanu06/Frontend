import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import s from "./store.js"
import {Provider} from "react-redux"
import React from 'react'
import ReactDOM from "react-dom/client"
import "bootstrap/dist/css/bootstrap.min.css"


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={s}>
        <App />
    </Provider>
)
