import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';
const App = () => {
  const [markDown, setMarkDown] = useState("Welcome to MarkDown");
  return (
    <>
    <div className="center-div">
      <textarea
          className="left-side"
          value={markDown}
          onChange={(e) => setMarkDown(e.target.value)}
        >
      </textarea>
      <div className="right-side">
         <ReactMarkdown>{markDown}</ReactMarkdown>
      </div>
    </div>
    </>
  )
}

export default App