// src/App.js
import React from 'react';
import './App.css';
import './styles/tailwind.css';
import ExampleComponent from './components/ExampleComponent';


function App() {
  return (
    <div className="App">
      <h1>Your React App</h1>
      <ExampleComponent />
      {/* Add more components or content here */}
    </div>
  );
}

export default App;
