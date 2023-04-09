import React from 'react'
import ForSale from './ForSale'

export default function About(props) {
    return (
        <div className="about">
            <h1>WHY DARKSTAR DESIGN?</h1>
            <p>I have been making book covers for over five years, and many of my covers have landed in the top 100 on the Amazon store. I know what it takes for a book cover to do well, and all of my covers are designed for the current market.</p>

            <p>I have made best-selling covers in Contemporary Romance, Romantic Comedy, and Scifi Romance. I have a strong eye for models, color pallete, and typography. I don't release a cover until it's top quality and ready to publish.</p>

            <p>When you buy a premade cover, it includes one free revision in case you'd like to change certain elements to suit your specific book. Three free Facebook ads are also included on all pre-made covers.</p>

            <p>As a former author, I know how important an amazing cover is. Without a great cover, your book will not sell. Let me help you give your book the best chance it can get.</p>

            <img src="arrow.png" id="arrow"></img> <h2 onClick={props.onCoverClick}>CLICK HERE TO GET A COVER</h2>



            </div>
    )
}