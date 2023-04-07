import React from 'react';
import Data from '../Data/portfolioData.js';

export default function Portfolio() {
  const genres = ["SCIFI ROMANCE", "CONTEMPORARY ROMANCE", "ROMANTIC COMEDY"];

  const genreCards = genres.map(genre => {
    const books = Data.filter(book => book.genre === genre);


    const bookCards = books.map(book => (
      <div className="grid--cover">
        <img className="cover--image" src={book.imageURL} alt={book.title} />
      </div>
    ));

    console.log(books)

    return (
      <div key={genre} className="portfolio--section">
        <div className="portfolio--header">{genre}</div>
        <div className="portfolio--grid">{bookCards}</div>
      </div>
    );
  });

  return (
    <div className="Portfolio">
      {genreCards}
    </div>
  );
}
  
  
  