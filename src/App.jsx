import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  const [selectedComponent, setSelectedComponent] = useState(<About />);

  const handleHeaderItemClick = (component) => {
    setSelectedComponent(component);
    console.log('Clicked on component:', component);
  };

  return (
    <div className="App">
      <Header onHeaderItemClick={handleHeaderItemClick} />
      <div className="selected--component">{selectedComponent}</div>
    </div>
  );
}

export default App;