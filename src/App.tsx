import altavistaLogo from './assets/icons/altavista-logo.png'
import interior from './assets/interior-render.jpg'
import amenities from './assets/amenities.jpg'
import arrow from './assets/icons/icon-button.png'
import frame from './assets/icons/frame.svg'
import diamond from './assets/icons/diamond.svg'
import investment from './assets/icons/investment.svg'
import water from './assets/icons/water.svg'
import stars from './assets/icons/stars.svg'
import { useState } from 'react'
import arrowup from './assets/icons/arrowup.svg'
import arrowdown from './assets/icons/arrowdown.svg'
import { useRef } from 'react'


 type Feature = {
          icon: string;
          title: string;
          text: string;
        };

const features: Feature[] = [
  {
    icon: frame,
    title: "Premium Location",
    text: "In the heart of the city's most valued area",
  },
  {
    icon: diamond,
    title: "Premium Location",
    text: "Top quality materials and exclusive architectural design",
  },
  {
    icon: investment,
    title: "Premium Location",
    text: "Appreciation projection exceeding 20% annually",
  },
  {
    icon: water,
    title: "Premium Location",
    text: "Spaces designed for an exceptional lifestyle",
  },
];

 type Experiences = {
          stars: string;
          review: string;
          name: string;
          position: string;
        };

const experience: Experiences[] = [
  {
    stars: stars,
    review: "“The best investment decision I made. The return exceeded my expectations and the team was always available for any questions.”",
    name: "Michael Thompson",
    position: "Investor",
  },
  {
    stars: stars,
    review: "“Altavista is not just a place to live, it's a smart investment. The project's appreciation has been exceptional from day one”",
    name: "Sarah Mitchell",
    position: "Entrepreneur",
  },
  {
    stars: stars,
    review: "“The level of finishes and strategic location make Altavista a unique opportunity. I'm very satisfied with my investment.”",
    name: "Jennifer Davis",
    position: "Professional",
  },
   {
    stars: stars,
    review: "“I've invested in several projects, but Altavista stands out for its professionalism and transparency. Highly recommended.”",
    name: "Robert Rodríguez",
    position: "Investor",
  }
];

type Faq = {
          question: string;
          answer: string;
        };

const faqs: Faq[] = [
  {
    question: "What type of investment does Altavista Residences offer?",
    answer: "Altavista Residences offers a real estate investment in high-end units with a strategic location. Investors can acquire units for rental or resale, with appreciation projections exceeding 20% annually."
  },
  {
    question: "What payment options are available?",
    answer: "The recommended payment period is at least 5 years to maximize returns. Investors can acquire units for rental or resale, with appreciation projections exceeding 20% annually."
  },
  {
    question: "What is the estimated delivery date?",
    answer: "The estimated delivery date is 2025. Investors can acquire units for rental or resale, with appreciation projections exceeding 20% annually."
  },
  {
    question: "What amenities does the project include?",
    answer: "The minimum amenities amount is $100,000. Investors can acquire units for rental or resale, with appreciation projections exceeding 20% annually."
  },
  {
    question: "Can I visit a model unit?",
    answer: "Yes, model units are available for visitation. Please contact our team to schedule a visit."
  },
  {
    question: "What does the webinar include?",
    answer: "The webinar includes an overview of the project, investment opportunities, and exclusive insights from our team."
  }
];

function App() {

  const [open, setOpen] = useState<number | null>(0);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }}

  return (
    <div className="flex justify-between flex-col items-center mx-auto text-center">
      <header className='flex flex-col items-center justify-between mb-6 mt-5 h-36'>
        <img src={altavistaLogo} className='w-11'/>
        <h1 className="text-purple text-6xl font-semibold">Altavista Residences</h1>
        <p className="text-subtitle text-2xl font-semibold">Invest Smart, Live Better</p>
      </header>
      <section className='flex flex-col items-center w-full px-4'>   
        <video 
        src="/video/proyecto inmobiliario video.mp4" 
        controls  
        className='w-full max-w-4xl'> 
        </video>
        <div className='flex flex-col items-center justify-between gap-6 mb-20 md:mb-40 px-4'>
          <p className='mt-5 text-base md:text-lg text-center'>Discover in our <b className='text-highlight'> exclusive webinar </b>  
             the real state investment opportunity you're been waiting for
          </p>
          <button className='bg-button hover:bg-hover-button text-white font-semibold 
          py-4 px-6 rounded-lg cursor-pointer w-full md:w-60 text-base md:text-lg' onClick={scrollToContact}>Register for webinar
          </button>
          <button className="cursor-pointer" onClick={scrollToContact}><img src={arrow} className='w-12 md:w-14'/></button>
        </div>  
      </section>
      <section className='mb-20 md:mb-40 border-solid border border-purple/30 rounded-lg p-6 md:p-8 w-full max-w-2xl mx-4' ref={contactRef}> 
        <div>
          <h3 className='text-2xl md:text-3xl font-semibold'>Register for the webinar</h3>
          <p className='text-sm mb-6 mt-2'>Complete your details and secure your spot at the 
            exclusive presentation
          </p>
        </div>
        <form className='flex flex-col items-start justify-evenly gap-4'>
          <label htmlFor="full-name">Full Name</label>
          <input type="text" id="full-name" placeholder="John Smith" 
            className='border-solid border-2 border-white/30 rounded-lg p-2 w-full' />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="John@example.com" 
            className='border-solid border-2 border-white/30 rounded-lg p-2 w-full' />
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" placeholder="+1(555)123-4567" 
            className='border-solid border-2 border-white/30 rounded-lg p-2 w-full' />
          <button className='bg-button hover:bg-hover-button text-white font-semibold py-2 
            px-4 rounded-lg cursor-pointer w-full text-lg items-center mx-auto mt-4'>Confirm Registration
          </button>
          <p className='text-xs mt-4'>By registering, you agree to be contacted via whatsapp and email 
            with project information.
          </p>
        </form>
      </section>
      <section className='flex flex-col items-center px-4 w-full'>
        <h2 className='text-3xl md:text-5xl mb-5 font-semibold text-center'>About <b className='text-purple'>Altavista Residences</b>
        </h2>
        <p className='text-base md:text-lg mb-5 text-subtitle text-center'>A project designed for those who want to invest in their 
          future without compromising their lifestyle
        </p>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5 w-full max-w-6xl mb-8'>
          <img src={interior} className='w-full rounded-lg'/>
          <img src={amenities} className='w-full rounded-lg'/>
        </div>
        <div className='w-full max-w-4xl mb-8'>
          <p className='text-base md:text-lg text-subtitle mb-5'>Altavista Residences is a smart investment opportunity 
            offering 120 exclusive units across two 18-story towers, designed for comfort and long-term value.
          </p>
          <p className='text-base md:text-lg text-subtitle'>Its prime location in one of the city's fastest-growing 
            areas provides immediate access to shopping, education, and entertainment — blending premium 
            living with exceptional investment potential.
          </p>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 w-full px-2">
          {features.map((value, index) => (
            <div key={index} className='flex flex-col items-center px-4 py-6 border-solid border
             border-purple/30 rounded-lg'>
              <img src={value.icon} className='w-20 md:w-35 mb-4'/>
              <h3 className='text-subtitle text-base md:text-lg font-semibold text-center'>{value.title}</h3>
              <p className='text-sm md:text-base text-textIcons text-center'>{value.text}</p>
            </div>
          ))}
        </section>
      </section>
      {/* reviews */}
      <section className='mt-20 md:mt-40 px-4 w-full'>
        <h2 className='text-3xl md:text-5xl text-subtitle font-semibold mb-5 text-center'>What Our <b className='text-purple'>
          Investors</b> Say
        </h2>
        <p className='text-base md:text-lg mb-8 text-center'>Learn from the experiences of those who are already part of Altavista 
          Residences
        </p>
        <article className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-6xl mx-auto'>
          {experience.map((value, index) => (
            <blockquote key={index} className='flex flex-col items-start px-5 pt-5 border-solid border
             border-purple/30 rounded-lg'>
              <img src={value.stars} className='w-24 md:w-35 mb-3'/>
              <p className='text-sm md:text-base text-subtitle text-left '>{value.review}</p>
              <hr className="w-full h-px bg-backgroundLine border-none my-5" />
              <h3 className='text-subtitle text-sm'>{value.name}</h3>
              <p className='text-textIcons text-xs md:text-sm mb-6'>{value.position}</p>
            </blockquote>
          ))}
        </article>
      </section>
      <section className='mt-20 md:mt-40 px-4 w-full'>
        <h2 className='text-3xl md:text-5xl text-subtitle font-semibold mb-5 text-center'>Frequently Asked 
          <b className='text-purple'> Questions</b>
        </h2>
        <p className='text-base md:text-lg mb-8 text-subtitle font-semibold text-center'>Learn from the experiences of those who are already part of Altavista 
          Residences
        </p>
        <div className='max-w-4xl mx-auto'>
          {faqs.map((faq, index) => (
            open === index ? (
            <dl key={index} className='mb-4 text-left w-full flex flex-col px-4 md:px-5 border-solid border
               border-purple/30 rounded-lg p-4 md:p-5 cursor-pointer' onClick={() => setOpen(null)}>
              <div className='flex justify-between items-center gap-4'>
                <dt className='text-base md:text-lg font-semibold text-subtitle mb-2'>{faq.question}</dt>
                <img src={arrowup} className='w-4 shrink-0' />
              </div>
              <dd className='text-sm md:text-base text-subtitle/80'>{faq.answer}</dd>
            </dl>
          ) : <dl key={index} className='mb-4 text-left w-full flex flex-col px-4 md:px-5 border-solid border
               border-purple/30 rounded-lg p-4 md:p-5 cursor-pointer' onClick={() => setOpen(index)}>
                <div className='flex justify-between items-center gap-4'>
                  <dt className='text-base md:text-lg font-semibold text-subtitle mb-2'>{faq.question}</dt>
                  <img src={arrowdown} className='w-4 shrink-0' />
                </div>
            </dl> ))}
        </div>
      </section>
      <footer className='mt-20 md:mt-40 mb-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-40 px-4 '>
        <div className='flex flex-col items-center md:items-start'>
          <img src={altavistaLogo} className='w-11 text-subtitle'/>
          <p className='text-lg font-semibold text-purple'>Altavista Residences</p>
          <p className='text-footer text-center md:text-left'>Invest Smart, Live Better</p>
        </div>
        <div className='flex flex-col items-center md:items-start'>
          <h3 className='text-lg font-semibold text-center md:text-left'>Contact</h3>
          <p className='text-footer text-center md:text-left'>info@altavistaresidences.com</p>
          <p className='text-footer text-center md:text-left'>+54 11 5555-1234</p>
          <p className='text-footer text-center md:text-left'>Av. Principal 1234, CABA</p>
        </div>
        <div className='flex flex-col items-center md:items-start'>
          <h3 className='text-lg font-semibold text-center md:text-left'>Legal</h3>
          <p className='text-footer text-center md:text-left'>Privacy Policy</p>
          <p className='text-footer text-center md:text-left'>Terms and Conditions</p>
          <p className='text-footer text-center md:text-left'>Consumer Protection</p>
        </div>
      </footer>
      <footer className='flex flex-col items-center mt-8 md:mt-12 mb-8 md:mb-18 px-4'>
         <p className='text-xs md:text-sm text-footer text-center'>&copy; 2025 Altavista Residences. All rights reserved.</p>
         <p className='text-xs md:text-sm text-footer text-center'>Images are representative and may be subject to modifications. Please inquire about unit availability.</p>
      </footer>
    </div>
  )
}

export default App


