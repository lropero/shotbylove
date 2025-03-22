import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Testimonials = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideRef = useRef(null)

  const testimonials = [
    {
      id: 1,
      couple: 'Sarah & James',
      date: 'June 2023',
      location: 'Malibu Rocky Oaks',
      category: 'luxury',
      quote: "Working with Dreams Collective was the best decision we made for our wedding. They captured not just beautiful photos, but the genuine emotions and tiny moments we would have missed. Every time we look at our album, we're transported back to that perfect day.",
      imageSrc: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      featured: true
    },
    {
      id: 2,
      couple: 'Marcus & David',
      date: 'September 2023',
      location: 'The Ebell of Los Angeles',
      category: 'urban',
      quote: "From our first phone call, we knew we were in good hands. They took the time to understand our vision and story as a couple. During the wedding day, they were practically invisible yet somehow captured every significant moment. Our family can't stop talking about how beautiful the photos turned out.",
      imageSrc: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 3,
      couple: 'Elena & Michael',
      date: 'April 2023',
      location: 'Parker Palm Springs',
      category: 'destination',
      quote: 'Our destination wedding had so many moving parts, but one thing we never worried about was photography. Their team was so professional, turning our Palm Springs wedding into a fashion-worthy photoshoot while still capturing all the authentic moments. The timeline they helped us create ensured we got every shot we wanted.',
      imageSrc: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      featured: true
    },
    {
      id: 4,
      couple: 'Aisha & Omar',
      date: 'August 2023',
      location: 'Hummingbird Nest Ranch',
      category: 'cultural',
      quote: "As a couple with specific cultural wedding traditions, we were worried about finding a photographer who would understand their significance. Dreams Collective took the time to learn about our customs and captured them with such respect and beauty. They weren't just photographers—they became storytellers of our heritage.",
      imageSrc: 'https://images.unsplash.com/photo-1525328437458-0c4d4db7cab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
      id: 5,
      couple: 'Taylor & Jordan',
      date: 'May 2023',
      location: 'Calamigos Ranch',
      category: 'rustic',
      quote: 'Our rustic-theme wedding was captured so elegantly. Even when it started to rain during our outdoor ceremony, the team adapted quickly and got the most magical rain shots that became our favorites. They have this ability to turn unexpected moments into the most memorable photographs.',
      imageSrc: 'https://images.unsplash.com/photo-1509927083803-4bd519298ac4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 6,
      couple: 'Sophia & Nathan',
      date: 'July 2023',
      location: 'The Resort at Pelican Hill',
      category: 'luxury',
      quote: "I'm usually so uncomfortable being photographed, but they made us feel so at ease. It was like having friends with cameras rather than formal photographers. The candid moments they captured are beyond precious - all the little looks and touches between us that tell our love story.",
      imageSrc: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    },
    {
      id: 7,
      couple: 'José & Maria',
      date: 'February 2023',
      location: 'SmogShoppe',
      category: 'urban',
      quote: "When our wedding photos arrived, I literally cried. They weren't just beautiful images—they were pieces of art that perfectly captured the atmosphere of our day. Seeing our urban wedding venue transformed through their lens was incredible. Worth every penny and more.",
      imageSrc: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      featured: true
    },
    {
      id: 8,
      couple: 'Michelle & Stephen',
      date: 'October 2022',
      location: 'Malibu Rocky Oaks',
      category: 'luxury',
      quote: "Having a sunset ceremony meant challenging lighting conditions, but our photographers handled it masterfully. They positioned everything perfectly to capture the golden glow without harsh shadows. The helicopter pad photos are absolute showstoppers that we've blown up as wall art in our home.",
      imageSrc: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Stories' },
    { id: 'luxury', name: 'Luxury Weddings' },
    { id: 'rustic', name: 'Rustic Celebrations' },
    { id: 'urban', name: 'Urban Settings' },
    { id: 'destination', name: 'Destination Events' },
    { id: 'cultural', name: 'Cultural Ceremonies' }
  ]

  const filteredTestimonials = activeCategory === 'all' ? testimonials : testimonials.filter(testimonial => testimonial.category === activeCategory)

  const featuredTestimonials = testimonials.filter(t => t.featured)

  // Function to move slides
  const nextSlide = () => {
    if (currentSlide >= featuredTestimonials.length - 1) {
      setCurrentSlide(0)
    } else {
      setCurrentSlide(prev => prev + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide <= 0) {
      setCurrentSlide(featuredTestimonials.length - 1)
    } else {
      setCurrentSlide(prev => prev - 1)
    }
  }

  // Set up automatic sliding
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 6000)

    return () => clearInterval(interval)
  }, [currentSlide])

  // Update slide translation when slide changes
  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transform = `translateX(-${currentSlide * 100}%)`
    }
  }, [currentSlide])

  return (
    <div className='min-h-screen bg-secondary-950'>
      <div className='container mx-auto px-4 py-12'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-10'>
            <h1 className='text-3xl md:text-4xl font-bold mb-4'>Client Love Wall</h1>
            <p className='text-secondary-300 max-w-2xl mx-auto'>Hear from happy couples who trusted us to capture their special day.</p>
          </div>

          {/* Featured Testimonials Carousel */}
          <div className='mb-16 relative overflow-hidden rounded-lg'>
            <div className='absolute top-1/2 left-4 transform -translate-y-1/2 z-10'>
              <button onClick={prevSlide} className='bg-black bg-opacity-30 hover:bg-opacity-50 text-white rounded-full p-2'>
                <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                  <polyline points='15 18 9 12 15 6' />
                </svg>
              </button>
            </div>

            <div className='absolute top-1/2 right-4 transform -translate-y-1/2 z-10'>
              <button onClick={nextSlide} className='bg-black bg-opacity-30 hover:bg-opacity-50 text-white rounded-full p-2'>
                <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                  <polyline points='9 18 15 12 9 6' />
                </svg>
              </button>
            </div>

            <div ref={slideRef} className='flex transition-transform duration-500 ease-in-out h-[500px]'>
              {featuredTestimonials.map((testimonial, index) => (
                <div key={testimonial.id} className='w-full flex-shrink-0 relative'>
                  <div className='absolute inset-0'>
                    <img src={testimonial.imageSrc} alt={`${testimonial.couple}'s wedding`} className='w-full h-full object-cover brightness-50' />
                  </div>
                  <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80' />
                  <div className='absolute bottom-0 left-0 right-0 p-8 text-white'>
                    <div className='max-w-3xl mx-auto text-center'>
                      <p className='text-xl md:text-2xl font-light italic mb-6'>"{testimonial.quote}"</p>
                      <div className='font-semibold text-lg'>{testimonial.couple}</div>
                      <div className='text-primary-400'>
                        {testimonial.location} • {testimonial.date}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className='absolute bottom-4 left-0 right-0 flex justify-center space-x-2'>
              {featuredTestimonials.map((_, index) => (
                <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-white bg-opacity-50'}`} />
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div className='mb-8'>
            <div className='flex flex-wrap justify-center gap-2 md:gap-4'>
              {categories.map(category => (
                <button key={category.id} onClick={() => setActiveCategory(category.id)} className={`px-4 py-2 rounded-full text-sm ${activeCategory === category.id ? 'bg-primary-600 text-white' : 'bg-secondary-800 text-secondary-200 hover:bg-secondary-700'}`}>
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Testimonial Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-12'>
            {filteredTestimonials.map(testimonial => (
              <div key={testimonial.id} className='bg-secondary-900 rounded-lg overflow-hidden shadow-lg'>
                <div className='flex flex-col h-full'>
                  <div className='relative h-60'>
                    <img src={testimonial.imageSrc} alt={`${testimonial.couple}'s wedding`} className='w-full h-full object-cover' />
                    {testimonial.videoUrl && (
                      <div className='absolute inset-0 flex items-center justify-center'>
                        <button
                          className='bg-black bg-opacity-40 hover:bg-opacity-60 text-white rounded-full p-4'
                          onClick={e => {
                            e.preventDefault()
                            window.open(testimonial.videoUrl.replace('embed/', 'watch?v='), '_blank')
                          }}
                        >
                          <svg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                            <polygon points='5 3 19 12 5 21 5 3' />
                          </svg>
                        </button>
                      </div>
                    )}
                    <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent px-4 py-2'>
                      <div className='font-semibold text-white'>{testimonial.couple}</div>
                      <div className='text-sm text-primary-400'>
                        {testimonial.location} • {testimonial.date}
                      </div>
                    </div>
                  </div>
                  <div className='p-6 flex-1 flex flex-col'>
                    <p className='text-secondary-300 italic flex-1'>"{testimonial.quote}"</p>
                    {testimonial.videoUrl && (
                      <div className='mt-4'>
                        <a href={testimonial.videoUrl.replace('embed/', 'watch?v=')} target='_blank' rel='noopener noreferrer' className='text-primary-400 flex items-center text-sm hover:text-primary-300'>
                          <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='mr-2'>
                            <polygon points='5 3 19 12 5 21 5 3' />
                          </svg>
                          Watch their story
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='bg-secondary-900 rounded-lg p-6 mb-10'>
            <div className='text-center mb-6'>
              <h2 className='text-2xl font-bold'>Share Your Story</h2>
              <p className='text-secondary-300'>Were you a Dreams Collective couple? We'd love to feature your testimonial!</p>
            </div>
            <div className='flex justify-center'>
              <Link to='/booking' className='btn-primary'>
                Submit Your Story
              </Link>
            </div>
          </div>

          <div className='text-center'>
            <p className='text-secondary-400 text-sm'>
              Ready to join our happy couples?{' '}
              <Link to='/booking' className='text-primary-400 hover:text-primary-300'>
                Check your date
              </Link>{' '}
              or explore more of our{' '}
              <Link to='/venues' className='text-primary-400 hover:text-primary-300'>
                venue work
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
