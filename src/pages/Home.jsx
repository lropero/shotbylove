import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='relative bg-secondary-950 overflow-hidden'>
        <div className='absolute inset-0 z-0 opacity-30 bg-gradient-to-r from-primary-900 to-secondary-950' />

        <div className='container mx-auto px-4 py-20 relative z-10'>
          <div className='max-w-3xl mx-auto text-center'>
            <h1 className='text-5xl md:text-6xl font-bold mb-6 text-gradient'>Your wedding, beautifully planned and captured</h1>
            <p className='text-xl mb-10 text-secondary-200'>From finding your style to building your shot list, estimating your budget, and creating a picture-perfect timeline—Shot by Love guides you through every step.</p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link to='/style-quiz' className='btn-primary text-center'>
                Find Your Style
              </Link>
              <Link to='/budget' className='btn-secondary text-center'>
                Estimate Your Budget
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className='bg-secondary-900 py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-12'>Plan Your Perfect Wedding Photos</h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {/* Feature 1: Style Quiz */}
            <div className='card hover:shadow-xl transition-shadow'>
              <div className='flex flex-col items-center'>
                <div className='w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-primary-900 text-white'>
                  <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' />
                  </svg>
                </div>
                <h3 className='text-xl font-bold mb-2'>Style Quiz</h3>
                <p className='text-secondary-300 text-center mb-4'>Discover your perfect wedding photography style with our interactive quiz.</p>
                <Link to='/style-quiz' className='btn-primary w-full text-center'>
                  Take the Quiz
                </Link>
              </div>
            </div>

            {/* Feature 2: Budget Estimator */}
            <div className='card hover:shadow-xl transition-shadow'>
              <div className='flex flex-col items-center'>
                <div className='w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-primary-900 text-white'>
                  <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                  </svg>
                </div>
                <h3 className='text-xl font-bold mb-2'>Budget Estimator</h3>
                <p className='text-secondary-300 text-center mb-4'>Calculate your wedding photography budget with our interactive estimator.</p>
                <Link to='/budget' className='btn-primary w-full text-center'>
                  Estimate Budget
                </Link>
              </div>
            </div>

            {/* Feature 3: Shot List */}
            <div className='card hover:shadow-xl transition-shadow'>
              <div className='flex flex-col items-center'>
                <div className='w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-primary-900 text-white'>
                  <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' />
                  </svg>
                </div>
                <h3 className='text-xl font-bold mb-2'>Shot List Builder</h3>
                <p className='text-secondary-300 text-center mb-4'>Create your custom wedding shot list to ensure you capture every moment.</p>
                <Link to='/shot-list' className='btn-primary w-full text-center'>
                  Build Shot List
                </Link>
              </div>
            </div>

            {/* Feature 4: Timeline */}
            <div className='card hover:shadow-xl transition-shadow'>
              <div className='flex flex-col items-center'>
                <div className='w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-primary-900 text-white'>
                  <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
                  </svg>
                </div>
                <h3 className='text-xl font-bold mb-2'>Timeline Generator</h3>
                <p className='text-secondary-300 text-center mb-4'>Plan your wedding day schedule to maximize beautiful photo opportunities.</p>
                <Link to='/timeline' className='btn-primary w-full text-center'>
                  Create Timeline
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='bg-gradient-to-r from-primary-900 to-accent-900 py-16'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold mb-6'>Ready to make your wedding memories last forever?</h2>
          <p className='text-lg mb-8 max-w-2xl mx-auto'>Let us help you plan every detail of your wedding photography experience. From your style to your timeline, we've got you covered.</p>
          <Link to='/booking' className='btn-secondary text-lg px-8 py-3'>
            Check Your Wedding Date
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className='bg-secondary-900 py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-8 text-center'>What Our Couples Say</h2>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* Testimonial 1 */}
            <div className='card'>
              <div className='flex flex-col h-full'>
                <div className='mb-4'>
                  <svg className='h-6 w-6 text-primary-500' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z' />
                  </svg>
                </div>
                <p className='text-secondary-300 mb-4 flex-grow'>"Shot by Love made planning our wedding photography so easy. The style quiz was spot on for helping us determine what we wanted, and the budget estimator was super helpful!"</p>
                <div className='flex items-center'>
                  <div className='w-10 h-10 rounded-full bg-secondary-700 mr-3 flex items-center justify-center'>
                    <span className='text-primary-500 font-bold'>J&M</span>
                  </div>
                  <div>
                    <p className='font-bold'>Jessica & Michael</p>
                    <p className='text-secondary-400 text-sm'>Wedding: June 2023</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className='card'>
              <div className='flex flex-col h-full'>
                <div className='mb-4'>
                  <svg className='h-6 w-6 text-primary-500' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z' />
                  </svg>
                </div>
                <p className='text-secondary-300 mb-4 flex-grow'>"The shot list builder made sure we didn't miss any important moments. Our album is perfect thanks to Dreams Collective Studios!"</p>
                <div className='flex items-center'>
                  <div className='w-10 h-10 rounded-full bg-secondary-700 mr-3 flex items-center justify-center'>
                    <span className='text-primary-500 font-bold'>R&D</span>
                  </div>
                  <div>
                    <p className='font-bold'>Rachel & David</p>
                    <p className='text-secondary-400 text-sm'>Wedding: October 2023</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className='card'>
              <div className='flex flex-col h-full'>
                <div className='mb-4'>
                  <svg className='h-6 w-6 text-primary-500' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z' />
                  </svg>
                </div>
                <p className='text-secondary-300 mb-4 flex-grow'>"The budget estimator was so helpful for our planning. We knew exactly what to expect and got even more than we hoped for!"</p>
                <div className='flex items-center'>
                  <div className='w-10 h-10 rounded-full bg-secondary-700 mr-3 flex items-center justify-center'>
                    <span className='text-primary-500 font-bold'>A&T</span>
                  </div>
                  <div>
                    <p className='font-bold'>Alex & Taylor</p>
                    <p className='text-secondary-400 text-sm'>Wedding: August 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='text-center mt-10'>
            <Link to='/testimonials' className='btn-primary'>
              Read More Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
