import { useState } from 'react'
import { Link } from 'react-router-dom'
import { DatePicker } from '../components/ui/date-picker'

const Booking = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    venue: '',
    message: ''
  })
  const [weddingDate, setWeddingDate] = useState()
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    // In a real app, we would submit the form data to a server here
    setSubmitted(true)
  }

  return (
    <div className='min-h-screen bg-secondary-950'>
      <div className='container mx-auto px-4 py-12'>
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-10'>
            <h1 className='text-3xl md:text-4xl font-bold mb-4'>Check Your Wedding Date</h1>
            <p className='text-secondary-300 max-w-2xl mx-auto'>Let's see if your date is available for our team to capture your special day.</p>
          </div>

          {!submitted
            ? (
              <div className='card mb-10'>
                <form onSubmit={handleSubmit}>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                    <div>
                      <label htmlFor='firstName' className='block text-white font-medium mb-2'>
                        First Name
                      </label>
                      <input type='text' id='firstName' name='firstName' value={formData.firstName} onChange={handleChange} required className='w-full px-4 py-2 rounded-lg bg-secondary-700 border border-secondary-600 text-white focus:outline-none focus:ring-2 focus:ring-primary-500' />
                    </div>

                    <div>
                      <label htmlFor='lastName' className='block text-white font-medium mb-2'>
                        Last Name
                      </label>
                      <input type='text' id='lastName' name='lastName' value={formData.lastName} onChange={handleChange} required className='w-full px-4 py-2 rounded-lg bg-secondary-700 border border-secondary-600 text-white focus:outline-none focus:ring-2 focus:ring-primary-500' />
                    </div>

                    <div>
                      <label htmlFor='email' className='block text-white font-medium mb-2'>
                        Email
                      </label>
                      <input type='email' id='email' name='email' value={formData.email} onChange={handleChange} required className='w-full px-4 py-2 rounded-lg bg-secondary-700 border border-secondary-600 text-white focus:outline-none focus:ring-2 focus:ring-primary-500' />
                    </div>

                    <div>
                      <label htmlFor='phone' className='block text-white font-medium mb-2'>
                        Phone
                      </label>
                      <input type='tel' id='phone' name='phone' value={formData.phone} onChange={handleChange} className='w-full px-4 py-2 rounded-lg bg-secondary-700 border border-secondary-600 text-white focus:outline-none focus:ring-2 focus:ring-primary-500' />
                    </div>

                    <div>
                      <label htmlFor='weddingDate' className='block text-white font-medium mb-2'>
                        Wedding Date
                      </label>
                      <DatePicker value={weddingDate} onChange={setWeddingDate} className='bg-secondary-700 border-secondary-600 text-white' />
                    </div>

                    <div>
                      <label htmlFor='venue' className='block text-white font-medium mb-2'>
                        Venue (if known)
                      </label>
                      <input type='text' id='venue' name='venue' value={formData.venue} onChange={handleChange} className='w-full px-4 py-2 rounded-lg bg-secondary-700 border border-secondary-600 text-white focus:outline-none focus:ring-2 focus:ring-primary-500' />
                    </div>

                    <div className='md:col-span-2'>
                      <label htmlFor='message' className='block text-white font-medium mb-2'>
                        Message
                      </label>
                      <textarea id='message' name='message' value={formData.message} onChange={handleChange} rows='4' className='w-full px-4 py-2 rounded-lg bg-secondary-700 border border-secondary-600 text-white focus:outline-none focus:ring-2 focus:ring-primary-500' />
                    </div>
                  </div>

                  <div className='text-center'>
                    <button type='submit' className='btn-primary px-8 py-2'>
                      Check Availability
                    </button>
                  </div>
                </form>
              </div>
              )
            : (
              <div className='card mb-10 text-center'>
                <div className='w-16 h-16 bg-primary-700 mx-auto mb-6 rounded-full flex items-center justify-center'>
                  <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7' />
                  </svg>
                </div>

                <h2 className='text-2xl font-bold mb-4'>Thank You!</h2>
                <p className='text-secondary-300 mb-8'>We've received your inquiry and will check if your date is available. We'll get back to you within 24-48 hours.</p>

                <Link to='/' className='btn-secondary'>
                  Return Home
                </Link>
              </div>
              )}

          <div className='text-center'>
            <p className='text-secondary-400 text-sm'>
              Not ready to book yet? Try our{' '}
              <Link to='/style-quiz' className='text-primary-400 hover:text-primary-300'>
                Style Quiz
              </Link>{' '}
              or explore more{' '}
              <Link to='/venues' className='text-primary-400 hover:text-primary-300'>
                Wedding Venues
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking
