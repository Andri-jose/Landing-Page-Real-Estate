
// import './App.css'

function App() {

  return (
    <div>
      <>icono</>
      <h1 className="text-purple">Altavista Residences</h1>
      <p>Invest Smart, Live Better</p>
      <>video</>
      <p>Discover in our <b>exclusive webinar</b> the real state investment opportunity you're been waiting for</p>
      <button>Register for webinar</button>
      <>boton flecha</>
      
      <div className='form-container'>
        <div>
          <h3>Register for the webinar</h3>
          <p>Complete your details and secure your spot at the exclusive presentation</p>
        </div>
        <form>
          <label htmlFor="full-name">Your Full Name</label>
          <input type="text" id="full-name" placeholder="Enter your full name" />
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" placeholder="Enter your email" />
          <label htmlFor="phone">Your Phone Number</label>
          <input type="tel" id="phone" placeholder="Enter your phone number" />
          <button>Confirm Registration</button>
        </form>
      </div>
    </div>
  )
}

export default App
