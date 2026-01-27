import altavistaLogo from './assets/icons/altavista-logo.png'
import interior from './assets/interior-render.jpg'
import amenities from './assets/amenities.jpg'
// import './App.css'

function App() {

  return (
    <div className="flex flex-col items-center mx-auto text-center">
      <header className='flex flex-col items-center'>
        <img src={altavistaLogo} className='w-10'/>
        <h1 className="text-purple text-6xl font-semibold">Altavista Residences</h1>
        <p>Invest Smart, Live Better</p>
      </header>
      <section className='flex flex-col items-center'>   
        <video 
        src="/video/proyecto inmobiliario video.mp4" 
        controls  
        className='w-96'> 
        </video>  
        <p>Discover in our <b>exclusive webinar</b> the real state investment opportunity you're been waiting for</p>
        <button>Register for webinar</button>
        <>boton flecha</>
      </section>
      <section className=''> 
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
      </section>
      <section>
        <h2 className='text-5xl'>About Altavista Residences</h2>
        <p>A project designed for those who want to invest in their future without compromising their lifestyle</p>
        <div className='grid grid-cols-2 gap-2'>
          <img src={interior} className='w-full'/>
          <img src={amenities} className='w-full'/>
        </div>
      </section>
      
     
    </div>
  )
}

export default App
// flex flex-col justify-center content-center text-center mx-auto