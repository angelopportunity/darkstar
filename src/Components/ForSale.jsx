import React from 'react';
import Data from '../Data/forsaleData.js';

export default function ForSale(props) {
  const genres = ["SCIFI ROMANCE", "CONTEMPORARY ROMANCE", "ROMANTIC COMEDY"];

  const genreCards = genres.map(genre => {
    const books = Data.filter(book => book.genre === genre);


    const bookCards = books.map(book => (
 
          <div className="forsale--box">
            <img className="forsale--cover--image" src={book.imageURL} alt={book.title} />
            <div className="info-wrapper">
              <div className="forsale--info">
                <h2>{book.title.toUpperCase()}</h2>
                <p>{book.price}</p>
                <p>{book.genre}</p>
                <button onClick={() => props.onBuyButtonClick(book)} className="forsale--button">CLICK TO BUY</button>
              </div>
            </div>
          </div>

      ));

    console.log(books)

    return (
      <div key={genre} className="forsale--portfolio--section">
        <div className="forsale--grid">{bookCards}</div>
      </div>
    );
  });

  return (
    <div className="Forsale">
      {genreCards}
    </div>
  );
}
  
  
  