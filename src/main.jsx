// src/main.jsx

import 'katex/dist/katex.min.css'; //
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Importa o CSS para as equações. Verifique se este caminho não está causando erro.
import 'katex/dist/katex.min.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)