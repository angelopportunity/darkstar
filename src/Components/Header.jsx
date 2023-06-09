import React from 'react';
import ForSale from './ForSale';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

export default function Header(props) {
  const [clickedLinks, setClickedLinks] = React.useState({});

  const handleItemClick = (component) => {
    props.onHeaderItemClick(component);
    setClickedLinks((prevState) => ({
      ...prevState,
      forSale: false,
      about: false,
      portfolio: false,
      contact: false,
    }));

    if (component.type.name === 'ForSale') {
      setClickedLinks((prevState) => ({
        ...prevState,
        forSale: true,
      }));
    } else if (component.type.name === 'About') {
      setClickedLinks((prevState) => ({
        ...prevState,
        about: true,
      }));
    } else if (component.type.name === 'Portfolio') {
      setClickedLinks((prevState) => ({
        ...prevState,
        portfolio: true,
      }));
    } else if (component.type.name === 'Contact') {
      setClickedLinks((prevState) => ({
        ...prevState,
        contact: true,
      }));
    }
  };

  const handleCoverClick = () => {
    props.onCoverClick();
  };

  return (
    <div className="header">
      <div className="header--logo--container">
        <div className="header--logo">
          <img src="star.png" id="logo" />
        </div>
        <div className="header--logotext--container">
          <span className="logo--text--black">DARK</span>
          <span className="logo--text--black--border">STAR</span>
          <span className="padded">DESIGN</span>
        </div>
      </div>

      <div className="header--text--container">
        <div
          onClick={() =>
            handleItemClick(
              <ForSale onBuyButtonClick={props.onBuyButtonClick} />,
              'forSale'
            )
          }
          className={`header--link ${clickedLinks['forSale'] ? 'clicked' : ''}`}
        >
          <div>FOR SALE</div>
        </div>

        <div
          onClick={() =>
            handleItemClick(
              <About
                onCoverClick={handleCoverClick}
                onBuyButtonClick={props.onBuyButtonClick}
              />,
              'about'
            )
          }
          className={`header--link ${clickedLinks['about'] ? 'clicked' : ''}`}
        >
          <div>ABOUT</div>
        </div>

        <div
          onClick={() => handleItemClick(<Portfolio />, 'portfolio')}
          className={`header--link ${clickedLinks['portfolio'] ? 'clicked' : ''}`}
        >
          <div>PORTFOLIO</div>
        </div>

        <div
          onClick={() => handleItemClick(<Contact />, 'contact')}
          className={`header--link ${clickedLinks['contact'] ? 'clicked' : ''}`}
        >
          <div>CONTACT</div>
        </div>
      </div>
    </div>
  );
}
