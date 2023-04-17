import React from 'react'

export default function Contact(props) {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [instructions, setInstructions] = React.useState("");

    const handleSubmit = (event) => {
        alert('Thank You! You should expect a response by the next business day.')
    }

return (
    <div className="orderform--container">
   
        <form className="orderform" onSubmit={handleSubmit} action="https://formbold.com/s/oJpMB" method="POST">
        <h2>Send me a message and I'll get back to you as soon as I can!</h2>
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

        <label className="orderform--textarea--label"><span className="orderform--textarea--label--wrapper">Your Message:</span></label>
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