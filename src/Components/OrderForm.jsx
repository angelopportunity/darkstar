import React from 'react'

export default function OrderForm(props) {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [penName, setpenName] = React.useState("");
    const [instructions, setInstructions] = React.useState("");

    const handleSubmit = (event) => {
        alert('Thank You! You should expect a response by the next business day.')
    }

return (
    <div className="orderform--container">
        <div className="forsale--box">
        <img className="orderform--cover--image" src={props.book.imageURL}/>
        </div>
   
        <form className="orderform" onSubmit={handleSubmit} action="https://formbold.com/s/oJpMB" method="POST">
        <h2>ORDER FORM FOR {props.book.title.toUpperCase()}</h2>
        <label className="orderform--label"><span className="orderform--label--wrapper">Name:</span>
        <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)} name="name"
        />
        </label>

        <label className="orderform--label"><span className="orderform--label--wrapper">Email:</span>
        <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)} name="email"
        />
        </label>

        <label className="orderform--label"><span className="orderform--label--wrapper">Pen Name:</span>
        <input
        type="text"
        value={penName}
        onChange={(e) => setpenName(e.target.value)} name="penName"
        />
        </label>

        <label className="orderform--textarea--label"><span className="orderform--textarea--label--wrapper">Additional Comments or Instructions, e.g. changes you'd like made, concerns about how your title or pen name will appear, etc. Don't worry, We will be able to email back and forth before these are finalized:</span></label>
        <textarea className="orderform--textarea"
        type="text"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)} name="instructions"
        />
        

        <button className="orderform--submitbutton">Submit</button>
        </form>
    </div>
)
}