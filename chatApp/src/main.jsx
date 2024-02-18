import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { ChatContextProvider } from './context/ChatContext.jsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <ChatContextProvider>
      <React.StrictMode>
    <App />
  </React.StrictMode>,
  </ChatContextProvider>
  </AuthContextProvider>

)
