 import submitted from './assets/icons/submitted.svg'


 function FormSubmitted() {
  return (      
    <div className="w-full max-w-xl bg-black/70 backdrop-blur-md p-10 rounded-xl border border-purple/30 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full border-2 border-purple flex items-center justify-center">
            <img src={submitted} className='text-purple text-4xl'/>
          </div>
        </div>

        <h2 className="text-3xl font-semibold mb-4">
          Thank you for registering
        </h2>

        <p className="text-gray-300 text-sm">
          A representative from Altavista Residences will contact you shortly
          with information about the webinar.
          <br />
          Please check your email or WhatsApp for updates.
        </p>
    </div>
)}; 

export default FormSubmitted;