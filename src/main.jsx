import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '@material-tailwind/react'
import Export from './Context/Export.jsx'
import Translater from './Context/Translater.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <Translater>
        <Export>
          <App />
        </Export>
      </Translater>
    </ThemeProvider>
  </React.StrictMode>,
)
