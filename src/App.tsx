import altavistaLogo from './assets/icons/altavista-logo.png'
import interior from './assets/interior-render.jpg'
import amenities from './assets/amenities.jpg'
import arrow from './assets/icons/icon-button.png'
import frame from './assets/icons/frame.svg'
import diamond from './assets/icons/diamond.svg'
import investment from './assets/icons/investment.svg'
import water from './assets/icons/water.svg'
import stars from './assets/icons/stars.svg'


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
          <p className='mt-5 text-lg'>Discover in our 
            <b className='text-highlight'>exclusive webinar
            </b> 
            the real state investment opportunity you're been waiting for
          </p>
          <button className='bg-button hover:bg-hover-button text-white font-semibold 
          py-4 px-4 rounded-lg cursor-pointer w-60 text-lg'>Register for webinar
          </button>
          <button className="cursor-pointer"><img src={arrow} className='w-14'/></button>
        </div>  
      </section>
      <div className='mb-40 border-solid border border-purple/30 rounded-lg p-8 w-xl'> 
        <div>
          <h3 className='text-3xl font-semibold'>Register for the webinar</h3>
          <p className='text-sm mb-6 mt-2'>Complete your details and secure your spot at the 
            exclusive presentation
          </p>
        </div>
        <form className='flex flex-col items-start justify-evenly h-95 gap-2'>
          <label htmlFor="full-name">Full Name</label>
          <input type="text" id="full-name" placeholder="John Smith" 
            className='border-solid border-2 border-white/30 rounded-lg p-2 w-full mb-3' />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="John@example.com" 
            className='border-solid border-2 border-white/30 rounded-lg p-2 w-full mb-3' />
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" placeholder="+1(555)123-4567" 
            className='border-solid border-2 border-white/30 rounded-lg p-2 w-full mb-3' />
          <button className='bg-button hover:bg-hover-button text-white font-semibold py-2 
            px-4 rounded-lg cursor-pointer w-full text-lg items-center mx-auto mt-2'>Confirm Registration
          </button>
          <p className='text-xs mt-4'>By registering, you agree to be contacted via whatsapp and email 
            with project information.
          </p>
        </form>
      </div>
      <section className='flex flex-col items-center '>
        <h2 className='text-5xl mb-5 font-semibold'>About <b className='text-purple'>Altavista Residences</b>
        </h2>
        <p className='text-lg mb-5 text-subtitle'>A project designed for those who want to invest in their 
          future without compromising their lifestyle
        </p>
        <div className='grid grid-cols-2 gap-5 w-6xl'>
          <img src={interior} className='w-full rounded-lg'/>
          <img src={amenities} className='w-full rounded-lg'/>
        </div>
        <div className='w-210 mt-10'>
          <p className='text-lg text-subtitle mb-5'>Altavista Residences is a smart investment opportunity 
            offering 120 exclusive units across two 18-story towers, designed for comfort and long-term value.
          </p>
          <p className='text-lg text-subtitle'>Its prime location in one of the city's fastest-growing 
            areas provides immediate access to shopping, education, and entertainment — blending premium 
            living with exceptional investment potential.
          </p>
        </div>
        <section className="flex justify-between gap-5 mt-10">
          {features.map((value, index) => (
            <div key={index} className='flex flex-col items-center px-5 w-65.5 h-62.75 border-solid border
             border-purple/30 rounded-lg'>
              <img src={value.icon} className='w-35'/>
              <h3 className='text-subtitle text-lg font-semibold'>{value.title}</h3>
              <p className='text-base text-textIcons'>{value.text}</p>
            </div>
          ))}
        </section>
      </section>
      {/* reviews */}
      <section className='mt-40'>
        <h2 className='text-5xl text-subtitle font-semibold mb-5'>What Our <b className='text-purple'>
          Investors</b> Say
        </h2>
        <p className='text-lg mb-5'>Learn from the experiences of those who are already part of Altavista 
          Residences
        </p>
        <article className='grid grid-cols-2 gap-5'>
          {experience.map((value, index) => (
            <blockquote key={index} className='flex flex-col items-start px-5 pt-5 w-137  border-solid border
             border-purple/30 rounded-lg'>
              <img src={value.stars} className='w-35 mb-3'/>
              <p className='text-base text-subtitle text-left '>{value.review}</p>
              <hr className="w-full h-px bg-backgroundLine border-none my-5" />
              <h3 className='text-subtitle text-sm'>{value.name}</h3>
              <p className='text-textIcons text-sm mb-9'>{value.position}</p>
            </blockquote>
          ))}
        </article>
      </section>
      <section className='mt-40'>
        <h2 className='text-5xl text-subtitle font-semibold mb-5'>Frequently Asked 
          <b className='text-purple'> Questions</b>
        </h2>
        <p className='text-lg mb-5 text-subtitle font-semibold'>Learn from the experiences of those who are already part of Altavista 
          Residences
        </p>
        {faqs.map((faq, index) => (
          <dl key={index} className='mb-6 text-left w-187.25 flex flex-col  px-5 border-solid border
             border-purple/30 rounded-lg p-5'>
            <dt className='text-lg font-semibold text-subtitle mb-2'>{faq.question}</dt>
            <dd className='text-base text-subtitle'>{faq.answer}</dd>
          </dl>
        ))}
      </section>
    
    </div>
  )
}

export default App


