import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'

// Finds the HTML element with an id of "root"
const rootElement = document.getElementById('root')

// Renders the App component inside of the root element.
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
