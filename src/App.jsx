import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="App-body">
      <h1>How to be Great at Anything</h1>
      <figure className="book">
        <img height="300" src="/ebook.jpg" alt="How to be Great at Anything (Book Cover)" />
        <figcaption>$13.99</figcaption>
      </figure>
      <form>
        <button type="submit">Buy it Now</button>
      </form>
    </div>
  )
}

export default App
