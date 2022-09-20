import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import "../src/assets/icons/css/all.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/css/global.css"
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import darkModeReducer from './slices/DarkMode'

const store = configureStore({
  reducer: {
    theme: darkModeReducer
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
