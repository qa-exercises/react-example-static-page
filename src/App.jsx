import React from 'react'
import './style.css'

export default function App() {
  return (
    <div>
      <header>
        <h1>React App</h1>
      </header>

      <main>
        <h2>Welcome!</h2>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
          alt="React logo"
          width="200px"
          className="spinning"
        />
        <p>This is some very interesting content.</p>
      </main>

      <footer>
        <a href="#">Privacy policy</a>
      </footer>
    </div>
  )
}
