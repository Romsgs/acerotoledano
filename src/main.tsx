import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Header } from './modules/header/header'
import { Main } from './modules/main/main'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <Main />
  </React.StrictMode>,
)
