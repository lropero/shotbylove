import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className='bg-secondary-900 border-b border-secondary-800 sticky top-0 z-50' id='header'>
      <div className='w-full '>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <Link to='/' className='flex items-center space-x-2'>
            <span className='text-2xl  font-bold text-gradient'>Shot by Love</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-8'>
            <Link to='/style-quiz' className='text-white hover:text-primary-400 transition-colors'>
              Style Quiz
            </Link>
            <Link to='/budget' className='text-white hover:text-primary-400 transition-colors'>
              Budget
            </Link>
            <Link to='/shot-list' className='text-white hover:text-primary-400 transition-colors'>
              Shot List
            </Link>
            <Link to='/timeline' className='text-white hover:text-primary-400 transition-colors'>
              Timeline
            </Link>
            <Link to='/venues' className='text-white hover:text-primary-400 transition-colors'>
              Venues
            </Link>
            <Link to='/testimonials' className='text-white hover:text-primary-400 transition-colors'>
              Testimonials
            </Link>
            <Link to='/course' className='text-white hover:text-primary-400 transition-colors'>
              Mini Course
            </Link>
          </nav>

          {/* Book Now Button */}
          <Link to='/booking' className='hidden md:inline-block btn-primary'>
            Check Your Date
          </Link>

          {/* Mobile Menu Button */}
          <button className='md:hidden text-white focus:outline-none' onClick={toggleMenu} aria-label='Toggle menu'>
            <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              {isMenuOpen ? <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' /> : <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className='md:hidden mt-4 pb-4 space-y-4'>
            <Link to='/style-quiz' className='block text-white hover:text-primary-400 transition-colors' onClick={toggleMenu}>
              Style Quiz
            </Link>
            <Link to='/budget' className='block text-white hover:text-primary-400 transition-colors' onClick={toggleMenu}>
              Budget
            </Link>
            <Link to='/shot-list' className='block text-white hover:text-primary-400 transition-colors' onClick={toggleMenu}>
              Shot List
            </Link>
            <Link to='/timeline' className='block text-white hover:text-primary-400 transition-colors' onClick={toggleMenu}>
              Timeline
            </Link>
            <Link to='/venues' className='block text-white hover:text-primary-400 transition-colors' onClick={toggleMenu}>
              Venues
            </Link>
            <Link to='/testimonials' className='block text-white hover:text-primary-400 transition-colors' onClick={toggleMenu}>
              Testimonials
            </Link>
            <Link to='/course' className='block text-white hover:text-primary-400 transition-colors' onClick={toggleMenu}>
              Mini Course
            </Link>
            <Link to='/booking' className='block btn-primary w-full text-center mt-4' onClick={toggleMenu}>
              Check Your Date
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
