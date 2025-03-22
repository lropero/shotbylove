import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'

const Course = () => {
  const [email, setEmail] = useState('')
  const [activeModule, setActiveModule] = useState(0)
  const [isValidEmail, setIsValidEmail] = useState(false)
  const [showEmailGate, setShowEmailGate] = useState(true)

  useEffect(() => {
    // Check if user already has access (via localStorage)
    const savedAccess = window.localStorage.getItem('courseAccess')
    if (savedAccess) {
      setShowEmailGate(false)
    }
  }, [])

  useEffect(() => {
    // Basic email validation
    setIsValidEmail(email.includes('@') && email.includes('.'))
  }, [email])

  const handleAccessRequest = () => {
    if (isValidEmail) {
      // Grant access and save to localStorage
      window.localStorage.setItem('courseAccess', 'granted')
      setShowEmailGate(false)
    }
  }

  const courseModules = [
    {
      id: 1,
      title: 'Planning Timeline & Lighting Considerations',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Learn how to create the perfect photography timeline for your wedding day, with a special focus on lighting considerations for different times of day and venues.',
      tips: ['Schedule your ceremony 2-3 hours before sunset for the best lighting', 'Allow 30 minutes for every 5 family group portraits', "Consider a 'first look' to maximize daylight photo time", 'Discuss lighting conditions at your venue with your photographer in advance'],
      duration: '12:45'
    },
    {
      id: 2,
      title: 'Looking Your Best on Camera',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Expert advice on how to prepare for the camera, including makeup tips, posing techniques, and how to feel natural in front of the lens.',
      tips: ['Schedule a hair and makeup trial that includes photos', 'Practice your natural smile and comfortable poses beforehand', 'Consider waterproof makeup, especially for emotional moments', 'Bring blotting papers and touch-up kit for shine control'],
      duration: '15:20'
    },
    {
      id: 3,
      title: 'Styling Your Wedding for Magazine-Worthy Photos',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Discover how to style your wedding details for stunning flat-lays and set up your venue for the most photogenic shots.',
      tips: ['Gather all detail items (rings, invitations, jewelry) in one place for your photographer', 'Choose a getting-ready space with abundant natural light', 'Consider the visual flow and color palette of your decor elements', 'Ask your florist for extra blooms for detail shots'],
      duration: '18:05'
    },
    {
      id: 4,
      title: 'Communicating Effectively With Your Photographer',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Learn how to articulate your vision, provide helpful references, and establish clear expectations with your photography team.',
      tips: ['Create a shared Pinterest board of images that resonate with your style', 'Be specific about must-have shots and moments', 'Communicate any family dynamics your photographer should be aware of', 'Designate a family coordinator to help gather people for group shots'],
      duration: '10:30'
    },
    {
      id: 5,
      title: 'Preserving Your Wedding Photos',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Expert advice on how to preserve, display, and share your wedding images for generations to come.',
      tips: ['Back up your digital files in at least three different places', 'Print your favorite images on archival paper', 'Consider an heirloom album with acid-free pages', 'Create a digital sharing strategy for friends and family'],
      duration: '14:15'
    }
  ]

  return (
    <div className='min-h-screen bg-secondary-950'>
      <div className='container mx-auto px-4 py-12'>
        <div className='max-w-5xl mx-auto'>
          <div className='text-center mb-10'>
            <h1 className='text-3xl md:text-4xl font-bold mb-4'>Wedding Photos Mini-Course</h1>
            <p className='text-secondary-300 max-w-2xl mx-auto'>Learn how to prepare for beautiful wedding photos with our exclusive mini-course.</p>
          </div>

          {showEmailGate ? (
            <div className='bg-secondary-900 rounded-lg p-8 md:p-12 mb-10'>
              <div className='max-w-3xl mx-auto text-center'>
                <div className='mb-8'>
                  <h2 className='text-2xl md:text-3xl font-bold mb-4'>Unlock Our Premium Mini-Course</h2>
                  <p className='text-secondary-300 mb-6'>Join over 500 couples who have used our expert tips to elevate their wedding photography experience. This exclusive content is available at no cost – just enter your email to begin.</p>
                </div>

                <div className='bg-secondary-800 p-6 rounded-lg mb-8'>
                  <div className='flex flex-col gap-3'>
                    {courseModules.map((module, index) => (
                      <div key={module.id} className='flex items-center p-3 rounded-lg bg-secondary-700 hover:bg-secondary-600 transition-colors'>
                        <div className='w-12 h-12 flex-shrink-0 rounded-full bg-primary-900 flex items-center justify-center mr-4'>
                          <span className='text-xl font-bold text-primary-400'>0{index + 1}</span>
                        </div>
                        <div className='flex-1'>
                          <h3 className='font-semibold text-white'>{module.title}</h3>
                          <p className='text-xs text-secondary-300'>{module.duration}</p>
                        </div>
                        <div className='ml-2 text-primary-500'>
                          <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                            <path d='M9 18l6-6-6-6' />
                          </svg>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className='mb-8'>
                  <div className='flex flex-col md:flex-row gap-3 max-w-md mx-auto'>
                    <input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Your email address' className='px-4 py-2 rounded-lg bg-secondary-700 border border-secondary-600 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 w-full' />
                    <Button onClick={handleAccessRequest} disabled={!isValidEmail} className='whitespace-nowrap'>
                      Unlock Access
                    </Button>
                  </div>
                  <p className='text-secondary-400 text-sm mt-2'>We respect your privacy. Unsubscribe at any time.</p>
                </div>

                <div className='flex flex-wrap justify-center gap-6 text-center'>
                  <div className='flex-1 min-w-[200px]'>
                    <div className='text-3xl font-bold text-primary-500 mb-2'>5</div>
                    <div className='text-secondary-300'>Video Lessons</div>
                  </div>
                  <div className='flex-1 min-w-[200px]'>
                    <div className='text-3xl font-bold text-primary-500 mb-2'>70+</div>
                    <div className='text-secondary-300'>Minutes of Content</div>
                  </div>
                  <div className='flex-1 min-w-[200px]'>
                    <div className='text-3xl font-bold text-primary-500 mb-2'>20</div>
                    <div className='text-secondary-300'>Pro Tips & Tricks</div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              {/* Course Content */}
              <div className='bg-secondary-900 rounded-lg overflow-hidden mb-8'>
                <div className='aspect-w-16 aspect-h-9'>
                  <iframe src={courseModules[activeModule].videoUrl} title={courseModules[activeModule].title} allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen className='w-full h-[400px]' />
                </div>

                <div className='p-6'>
                  <div className='flex justify-between items-center mb-4'>
                    <h2 className='text-xl md:text-2xl font-bold'>{courseModules[activeModule].title}</h2>
                    <span className='text-secondary-400 text-sm'>{courseModules[activeModule].duration}</span>
                  </div>
                  <p className='text-secondary-300 mb-6'>{courseModules[activeModule].description}</p>

                  <div className='bg-secondary-800 rounded-lg p-5 mb-6'>
                    <h3 className='text-lg font-semibold mb-3'>Quick Tips:</h3>
                    <ul className='space-y-2'>
                      {courseModules[activeModule].tips.map((tip, index) => (
                        <li key={index} className='flex items-start'>
                          <div className='text-primary-500 mr-2'>•</div>
                          <span className='text-secondary-300'>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className='flex justify-between'>
                    <Button onClick={() => setActiveModule(prev => Math.max(0, prev - 1))} disabled={activeModule === 0} variant='outline'>
                      Previous Module
                    </Button>
                    <Button onClick={() => setActiveModule(prev => Math.min(courseModules.length - 1, prev + 1))} disabled={activeModule === courseModules.length - 1}>
                      Next Module
                    </Button>
                  </div>
                </div>
              </div>

              {/* Module Selection */}
              <div className='bg-secondary-900 rounded-lg p-6 mb-8'>
                <h3 className='text-lg font-semibold mb-4'>Course Modules:</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                  {courseModules.map((module, index) => (
                    <div key={module.id} onClick={() => setActiveModule(index)} className={`rounded-lg p-4 cursor-pointer transition-colors ${activeModule === index ? 'bg-primary-900 hover:bg-primary-800' : 'bg-secondary-800 hover:bg-secondary-700'}`}>
                      <div className='flex items-center'>
                        <div className={`w-10 h-10 flex items-center justify-center rounded-full mr-3 ${activeModule === index ? 'bg-primary-700' : 'bg-secondary-700'}`}>
                          <span className={activeModule === index ? 'text-white' : 'text-primary-500'}>{index + 1}</span>
                        </div>
                        <div className='flex-1'>
                          <h4 className={`font-medium ${activeModule === index ? 'text-white' : 'text-secondary-200'}`}>{module.title}</h4>
                          <p className={`text-xs ${activeModule === index ? 'text-primary-200' : 'text-secondary-400'}`}>{module.duration}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Box */}
              <div className='bg-secondary-900 rounded-lg p-6 mb-8'>
                <div className='text-center'>
                  <h3 className='text-xl font-bold mb-3'>Ready to Take the Next Step?</h3>
                  <p className='text-secondary-300 mb-6 max-w-3xl mx-auto'>Now that you've learned the essentials, let's put this knowledge into action for your wedding day. Check if your date is available and let's create beautiful images together.</p>
                  <Link to='/booking' className='btn-primary inline-block'>
                    Check Your Date
                  </Link>
                </div>
              </div>
            </div>
          )}

          <div className='text-center'>
            <p className='text-secondary-400 text-sm'>
              Explore more resources:{' '}
              <Link to='/shot-list' className='text-primary-400 hover:text-primary-300'>
                Shot List Builder
              </Link>{' '}
              or
              <Link to='/timeline' className='text-primary-400 hover:text-primary-300'>
                {' '}
                Timeline Generator
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Course
