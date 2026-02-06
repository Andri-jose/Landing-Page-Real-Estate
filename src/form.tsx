import React, { useState } from 'react';


type FormData = {
  fullName: string
  email: string
  phone: string
}

type FormErrors = {
  fullName?: string
  email?: string
  phone?: string
}


function Form({ setIsSubmitted }: { setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>> }) {
  const [form, setForm] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  
  const { id, value } = e.target

  setForm((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {}

    if (form.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter at least 2 characters'
    }

    if (!form.email) {
      newErrors.email = 'Please enter your email address'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    const digits = form.phone.replace(/\D/g, '')
    if (!form.phone) {
      newErrors.phone = 'Phone number is required'
    } else if (digits.length < 10) {
      newErrors.phone = 'Phone number must have 10 digits'
    } 

    return newErrors
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    
    const validationErrors = validate()
    setErrors(validationErrors)
    
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true)
    }
  }
  
  
return (
    <form onSubmit={handleSubmit} className="flex flex-col items-start gap-4">
        <label htmlFor="fullName">Full Name</label>
        <input
          id="fullName"
          type="text"
          placeholder="John Smith"
          value={form.fullName}
          onChange={handleChange}
          className={`border-2 rounded-lg p-2 w-full focus:outline-none
            ${errors.fullName ? 'border-red-500' : 'border-white/30 focus:border-purple'}`}
        />
        {errors.fullName && (
          <p className="text-red-500 text-xs">{errors.fullName}</p>
        )}  
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="John@example.com"
          value={form.email}
          onChange={handleChange}
          className={`border-2 rounded-lg p-2 w-full focus:outline-none
            ${errors.email ? 'border-red-500' : 'border-white/30 focus:border-purple'}`}
        />
        {errors.email && (
          <p className="text-red-500 text-xs">{errors.email}</p>
        )}  
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="tel"
          placeholder="1551234567"
          value={form.phone}
          onChange={handleChange}
          className={`border-2 rounded-lg p-2 w-full focus:outline-none
            ${errors.phone ? 'border-red-500' : 'border-white/30 focus:border-purple'}`}
        />
        {errors.phone && (
          <p className="text-red-500 text-xs">{errors.phone}</p>
        )}  
        <button
          type="submit"
          className="bg-linear-to-r from-button to-mainbutton hover:from-hover-button hover:to-hover-button
           text-white font-semibold py-2 px-4 rounded-lg w-full mt-4 cursor-pointer"
        >
          Confirm Registration
        </button>   
        <p className="text-xs mt-4 text-textIcons">
          By registering, you agree to be contacted via WhatsApp and email with project information.
        </p>
    </form>
)}

export default Form;