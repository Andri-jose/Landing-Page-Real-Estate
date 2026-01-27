import altavistaLogo from './assets/icons/altavista-logo.png'
import interior from './assets/interior-render.jpg'
import amenities from './assets/amenities.jpg'
import arrow from './assets/icons/icon-button.png'

function App() {

  return (
    <div className="flex justify-between flex-col items-center mx-auto text-center">
      <header className='flex flex-col items-center justify-between mb-6 mt-5 h-36'>
        <img src={altavistaLogo} className='w-11'/>
        <h1 className="text-purple text-6xl font-semibold">Altavista Residences</h1>
        <p className="text-subtitle text-2xl font-semibold">Invest Smart, Live Better</p>
      </header>
      <section className='flex flex-col items-center'>   
        <video 
        src="/video/proyecto inmobiliario video.mp4" 
        controls  
        className='w-180.75'> 
        </video>
        <div className='flex flex-col items-center justify-between h-54 mb-40'>
          <p className='mt-5 text-lg'>Discover in our <b className='text-highlight'>exclusive webinar</b> the real state investment opportunity you're been waiting for</p>
          <button className='bg-button hover:bg-hover-button text-white font-semibold py-4 px-4 rounded-lg cursor-pointer w-60 text-lg'>Register for webinar</button>
          <button className="cursor-pointer"><img src={arrow} className='w-14'/></button>
        </div>  
      </section>
      <section className='mb-40 border-solid border border-purple/30 rounded-lg p-8 w-xl'> 
        <div>
          <h3 className='text-3xl font-semibold'>Register for the webinar</h3>
          <p className='text-sm mb-6 mt-2'>Complete your details and secure your spot at the exclusive presentation</p>
        </div>
        <form className='flex flex-col items-start justify-evenly h-95 gap-2'>
          <label htmlFor="full-name">Full Name</label>
          <input type="text" id="full-name" placeholder="John Smith" className='border-solid border-2 border-white/30 rounded-lg p-2 w-full mb-3' />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="John@example.com" className='border-solid border-2 border-white/30 rounded-lg p-2 w-full mb-3' />
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" placeholder="+1(555)123-4567" className='border-solid border-2 border-white/30 rounded-lg p-2 w-full mb-3' />
          <button className='bg-button hover:bg-hover-button text-white font-semibold py-2 px-4 rounded-lg cursor-pointer w-full text-lg items-center mx-auto mt-2'>Confirm Registration</button>
          <p className='text-xs mt-4'>By registering, you agree to be contacted via whatsapp and email with project information.</p>
        </form>
      </section>
      <section className='flex flex-col items-center justify-between h-139'>
        <h2 className='text-5xl'>About <b className='text-purple'>Altavista Residences</b></h2>
        <p>A project designed for those who want to invest in their future without compromising their lifestyle</p>
        <div className='grid grid-cols-2 gap-5 w-6xl'>
          <img src={interior} className='w-full rounded-lg'/>
          <img src={amenities} className='w-full rounded-lg'/>
        </div>
      </section>
      
     
    </div>
  )
}

export default App
// flex flex-col justify-center content-center text-center mx-auto