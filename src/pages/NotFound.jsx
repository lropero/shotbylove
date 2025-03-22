import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-[70vh] px-4'>
      <h1 className='text-5xl md:text-6xl font-bold mb-6 text-gradient '>404</h1>
      <p className='text-2xl mb-8 text-center'>Oops! This page went missing like the ring bearer at the reception.</p>
      <p className='text-secondary-300 mb-8 text-center max-w-2xl'>The page you're looking for doesn't exist or has been moved. But don't worry, there are plenty of other ways we can help plan your special day.</p>
      <div className='flex flex-col sm:flex-row gap-4'>
        <Link to='/' className='btn-primary text-center'>
          Back to Home
        </Link>
        <Link to='/booking' className='btn-secondary text-center'>
          Check Your Date
        </Link>
      </div>
    </div>
  )
}

export default NotFound
