import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import About from './Components/About';
import ForSale from './Components/ForSale';
import OrderForm from './Components/OrderForm';
import Contact from './Components/Contact';

function App() {
  const handleCoverClick = () => {
    handleHeaderItemClick(<ForSale onBuyButtonClick={handleBuyButtonClick} />);
  };

  const [selectedComponent, setSelectedComponent] = useState(
    <About onCoverClick={handleCoverClick} />
  );

  const handleHeaderItemClick = (component) => {
    setSelectedComponent(component);
    console.log('Clicked on component:', component);
  };

  const handleBuyButtonClick = (book) => {
    setSelectedComponent(<OrderForm book={book} />);
  };

  return (
    <div className="App">
      <div className="header">
        <Header
          onHeaderItemClick={handleHeaderItemClick}
          onBuyButtonClick={handleBuyButtonClick}
        />
      </div>
      <div className="selected--component">{selectedComponent}</div>
    </div>
  );
}

export default App;
