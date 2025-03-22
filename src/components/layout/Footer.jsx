import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-secondary-900 border-t border-secondary-800 py-12'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Logo and Description */}
          <div className='md:col-span-1 text-center md:text-left flex flex-col items-center md:items-start'>
            <Link to='/' className='inline-flex items-center space-x-2'>
              <span className='text-xl font-bold text-gradient'>Shot by Love</span>
            </Link>
            <p className='mt-4 text-secondary-300 max-w-sm'>Your wedding, beautifully planned and captured. From Dreams Collective Studios with love ❤️</p>
            <div className='mt-4 flex space-x-4'>
              <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' aria-label='Instagram' className='text-secondary-300 hover:text-white transition-colors'>
                <svg className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                </svg>
              </a>
              <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' aria-label='Facebook' className='text-secondary-300 hover:text-white transition-colors'>
                <svg className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.49 0-1.955.925-1.955 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z' />
                </svg>
              </a>
              <a href='https://pinterest.com' target='_blank' rel='noopener noreferrer' aria-label='Pinterest' className='text-secondary-300 hover:text-white transition-colors'>
                <svg className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z' />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className='md:col-span-1'>
            <h3 className='text-lg font-semibold text-white mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <Link to='/style-quiz' className='text-secondary-300 hover:text-white transition-colors'>
                  Style Quiz
                </Link>
              </li>
              <li>
                <Link to='/budget' className='text-secondary-300 hover:text-white transition-colors'>
                  Budget Estimator
                </Link>
              </li>
              <li>
                <Link to='/shot-list' className='text-secondary-300 hover:text-white transition-colors'>
                  Shot List Builder
                </Link>
              </li>
              <li>
                <Link to='/timeline' className='text-secondary-300 hover:text-white transition-colors'>
                  Timeline Generator
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className='md:col-span-1'>
            <h3 className='text-lg font-semibold text-white mb-4'>Resources</h3>
            <ul className='space-y-2'>
              <li>
                <Link to='/venues' className='text-secondary-300 hover:text-white transition-colors'>
                  Venue Lookbook
                </Link>
              </li>
              <li>
                <Link to='/testimonials' className='text-secondary-300 hover:text-white transition-colors'>
                  Client Stories
                </Link>
              </li>
              <li>
                <Link to='/course' className='text-secondary-300 hover:text-white transition-colors'>
                  Photo Prep Mini-Course
                </Link>
              </li>
              <li>
                <Link to='/blog' className='text-secondary-300 hover:text-white transition-colors'>
                  Wedding Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className='md:col-span-1'>
            <h3 className='text-lg font-semibold text-white mb-4'>Contact</h3>
            <Link to='/booking' className='btn-primary mb-4 inline-block'>
              Check Your Date
            </Link>
            <ul className='space-y-2 text-secondary-300'>
              <li>Dreams Collective Studios</li>
              <li>info@dreamscollectivestudios.com</li>
              <li>(760) 333-7372</li>
            </ul>
          </div>
        </div>

        <div className='border-t border-secondary-800 mt-12 pt-8 text-secondary-400'>
          <p>&copy; {currentYear} Dreams Collective Studios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
