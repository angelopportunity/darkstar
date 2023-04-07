export default function PortfolioCard(props) {
    console.log(props)
  
    let Contemporary = []
    let Romcom = []
    let Scifi = []
  
    if (props.item.genre == "contemporary") {
      Contemporary.push(props.item)
    } else if (props.item.genre == "romcom") {
      Romcom.push(props.item)
    } else if (props.item.genre == "scifi") {
      Scifi.push(props.item)
    }
  
    return (
      <div className="Portfolio">
        <div className="portfolio--header">CONTEMPORARY ROMANCE</div>
        <div className="portfolio--grid">
          {Contemporary.map(book => (
            <div className="grid--cover"><img className="cover--image" src={book.imageURL}></img></div>
          ))}
        </div>
  
        <div className="portfolio--header">ROMANTIC COMEDY</div>
        <div className="portfolio--grid">
          {Romcom.map(book => (
            <div className="grid--cover"><img className="cover--image" src={book.imageURL}></img></div>
          ))}
        </div>
  
        <div className="portfolio--header">SCIFI ROMANCE</div>
        <div className="portfolio--grid">
          {Scifi.map(book => (
            <div className="grid--cover"><img className="cover--image" src={book.imageURL}></img></div>
          ))}
        </div>
      </div>
    )
  }