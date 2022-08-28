import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "../src/assets/icons/css/all.css"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
