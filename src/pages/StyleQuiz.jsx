import { useState } from 'react'

const StyleQuiz = () => {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)
  const [email, setEmail] = useState('')
  const [showEmailModal, setShowEmailModal] = useState(false)

  // Quiz questions and options
  const questions = [
    {
      id: 'composition',
      question: 'Which photo composition do you prefer?',
      options: [
        {
          id: 'candid',
          label: 'Candid & Natural',
          description: 'Authentic moments captured as they happen',
          image: 'https://placehold.co/400x300/333/FFF?text=Candid'
        },
        {
          id: 'posed',
          label: 'Posed & Polished',
          description: 'Carefully arranged shots with attention to detail',
          image: 'https://placehold.co/400x300/333/FFF?text=Posed'
        },
        {
          id: 'artistic',
          label: 'Artistic & Creative',
          description: 'Unique perspectives and creative compositions',
          image: 'https://placehold.co/400x300/333/FFF?text=Artistic'
        }
      ]
    },
    {
      id: 'lighting',
      question: 'What lighting style speaks to you?',
      options: [
        {
          id: 'bright',
          label: 'Bright & Airy',
          description: 'Light-filled images with a soft, dreamy quality',
          image: 'https://placehold.co/400x300/333/FFF?text=Bright'
        },
        {
          id: 'moody',
          label: 'Dark & Moody',
          description: 'Rich contrasts with dramatic shadows',
          image: 'https://placehold.co/400x300/333/FFF?text=Moody'
        },
        {
          id: 'natural',
          label: 'Natural & True-to-life',
          description: 'Balanced lighting that captures accurate colors',
          image: 'https://placehold.co/400x300/333/FFF?text=Natural'
        }
      ]
    },
    {
      id: 'editing',
      question: 'Which editing style do you prefer?',
      options: [
        {
          id: 'film',
          label: 'Film-inspired',
          description: 'Soft tones with a timeless, analog feel',
          image: 'https://placehold.co/400x300/333/FFF?text=Film'
        },
        {
          id: 'vibrant',
          label: 'Bold & Vibrant',
          description: 'Rich colors and high contrast for impact',
          image: 'https://placehold.co/400x300/333/FFF?text=Vibrant'
        },
        {
          id: 'classic',
          label: 'Clean & Classic',
          description: 'Subtle processing that will never go out of style',
          image: 'https://placehold.co/400x300/333/FFF?text=Classic'
        }
      ]
    },
    {
      id: 'focus',
      question: 'What should your photos focus on?',
      options: [
        {
          id: 'details',
          label: 'Beautiful Details',
          description: 'Close-ups of rings, flowers, decor, and special touches',
          image: 'https://placehold.co/400x300/333/FFF?text=Details'
        },
        {
          id: 'emotions',
          label: 'Emotional Moments',
          description: 'Tears, laughs, and heartfelt expressions',
          image: 'https://placehold.co/400x300/333/FFF?text=Emotions'
        },
        {
          id: 'environment',
          label: 'Stunning Locations',
          description: 'Sweeping views and architectural elements',
          image: 'https://placehold.co/400x300/333/FFF?text=Location'
        }
      ]
    }
  ]

  // Results based on answers
  const quizResults = {
    romantic: {
      title: 'Romantic Elegance',
      description: 'You appreciate timeless beauty with a touch of romance. Your dream wedding photos have a soft, dreamy quality with an emphasis on tender moments and delicate details.',
      image: 'https://placehold.co/800x500/333/FFF?text=Romantic+Style',
      gallery: ['https://placehold.co/400x300/333/FFF?text=Romantic+1', 'https://placehold.co/400x300/333/FFF?text=Romantic+2', 'https://placehold.co/400x300/333/FFF?text=Romantic+3']
    },
    documentary: {
      title: 'Documentary Storytelling',
      description: 'You value authenticity above all. Your ideal wedding photos tell the real story of your day through candid moments, genuine emotions, and the natural flow of events.',
      image: 'https://placehold.co/800x500/333/FFF?text=Documentary+Style',
      gallery: ['https://placehold.co/400x300/333/FFF?text=Documentary+1', 'https://placehold.co/400x300/333/FFF?text=Documentary+2', 'https://placehold.co/400x300/333/FFF?text=Documentary+3']
    },
    editorial: {
      title: 'Editorial Chic',
      description: "Your taste leans toward the magazine-worthy and dramatic. You're drawn to bold, creative compositions that make a statement and showcase fashion-forward sensibilities.",
      image: 'https://placehold.co/800x500/333/FFF?text=Editorial+Style',
      gallery: ['https://placehold.co/400x300/333/FFF?text=Editorial+1', 'https://placehold.co/400x300/333/FFF?text=Editorial+2', 'https://placehold.co/400x300/333/FFF?text=Editorial+3']
    }
  }

  // Handle option selection
  const handleSelectOption = (questionId, optionId) => {
    setAnswers({
      ...answers,
      [questionId]: optionId
    })

    // Auto-advance to next question
    if (step < questions.length - 1) {
      setTimeout(() => {
        setStep(step + 1)
      }, 300)
    }
  }

  // Calculate results based on answers
  const calculateResults = () => {
    // Simple algorithm - in a real app, this would be more sophisticated
    const { composition, lighting, editing, focus } = answers

    if ((composition === 'candid' && focus === 'emotions') || (lighting === 'natural' && editing === 'classic')) {
      return 'documentary'
    } else if ((composition === 'artistic' && focus === 'environment') || (lighting === 'moody' && editing === 'vibrant')) {
      return 'editorial'
    } else {
      return 'romantic'
    }
  }

  // Handle form submission
  const handleSubmit = e => {
    e.preventDefault()
    // In a real app, we would save the email to a database
    setShowEmailModal(false)
    setShowResults(true)
  }

  // Handle "See Results" button click
  const handleSeeResults = () => {
    setShowEmailModal(true)
  }

  // Progress bar calculation
  const progress = ((step + 1) / questions.length) * 100

  // Determine which result to show
  const resultType = calculateResults()
  const result = quizResults[resultType]

  return (
    <div className='min-h-screen bg-secondary-950'>
      <div className='container mx-auto px-4 py-12'>
        {!showResults ? (
          <div className='max-w-3xl mx-auto'>
            <div className='text-center mb-10'>
              <h1 className='text-3xl md:text-4xl font-bold mb-4'>Find Your Wedding Photography Style</h1>
              <p className='text-secondary-300'>Answer a few questions to discover the perfect photography style for your special day.</p>
            </div>

            {/* Progress bar */}
            <div className='w-full bg-secondary-800 rounded-full h-2.5 mb-8'>
              <div className='bg-primary-600 h-2.5 rounded-full transition-all duration-300' style={{ width: `${progress}%` }} />
            </div>

            {/* Question */}
            <div className='card mb-8'>
              <h2 className='text-2xl font-bold mb-6'>{questions[step].question}</h2>

              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {questions[step].options.map(option => (
                  <div
                    key={option.id}
                    className={`
                        border rounded-lg overflow-hidden cursor-pointer transition-all
                        ${answers[questions[step].id] === option.id ? 'border-primary-500 ring-2 ring-primary-500 ring-opacity-50' : 'border-secondary-700 hover:border-primary-400'}
                      `}
                    onClick={() => handleSelectOption(questions[step].id, option.id)}
                  >
                    <div className='aspect-video w-full overflow-hidden bg-secondary-800'>
                      <img src={option.image} alt={option.label} className='w-full h-full object-cover' />
                    </div>
                    <div className='p-4'>
                      <h3 className='font-medium'>{option.label}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className='flex justify-between'>
              {step > 0 && (
                <button className='btn-secondary' onClick={() => setStep(Math.max(0, step - 1))}>
                  Previous
                </button>
              )}
              <div className='flex-1' />
              {step === questions.length - 1
                ? (
                  <button className='btn-primary' onClick={handleSeeResults}>
                    See Results
                  </button>
                  )
                : (
                  <button className='btn-primary' onClick={() => setStep(Math.min(questions.length - 1, step + 1))} disabled={!answers[questions[step].id]}>
                    Next
                  </button>
                  )}
            </div>
          </div>
        ) : (
          // Results page
          <div className='max-w-4xl mx-auto'>
            <div className='text-center mb-10'>
              <h1 className='text-3xl md:text-4xl font-bold mb-4'>Your Photography Style</h1>
              <p className='text-secondary-300'>Based on your answers, we've found your perfect wedding photography style.</p>
            </div>

            <div className='card mb-10'>
              <div className='aspect-video w-full overflow-hidden bg-secondary-800 rounded-t-lg mb-6'>
                <img src={result.image} alt={result.title} className='w-full h-full object-cover' />
              </div>

              <h2 className='text-2xl font-bold mb-4 text-gradient'>{result.title}</h2>
              <p className='text-secondary-300 mb-6'>{result.description}</p>

              <h3 className='text-xl font-bold mb-4'>Sample Gallery</h3>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
                {result.gallery.map((image, index) => (
                  <div key={index} className='aspect-video bg-secondary-800 rounded-lg overflow-hidden'>
                    <img src={image} alt={`${result.title} example ${index + 1}`} className='w-full h-full object-cover' />
                  </div>
                ))}
              </div>

              <div className='text-center mt-8'>
                <p className='text-secondary-300 mb-4'>Love this style? Let's talk about capturing your special day.</p>
                <button className='btn-primary'>Book a Consultation</button>
              </div>
            </div>

            <div className='text-center'>
              <button
                className='btn-secondary'
                onClick={() => {
                  setStep(0)
                  setAnswers({})
                  setShowResults(false)
                }}
              >
                Retake Quiz
              </button>
            </div>
          </div>
        )}

        {/* Email Modal */}
        {showEmailModal && (
          <div className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4'>
            <div className='bg-secondary-800 rounded-lg p-8 max-w-md w-full'>
              <h2 className='text-2xl font-bold mb-4'>Almost there!</h2>
              <p className='text-secondary-300 mb-6'>Enter your email to see your personalized wedding photography style results.</p>

              <form onSubmit={handleSubmit}>
                <div className='mb-4'>
                  <label htmlFor='email' className='block text-secondary-300 mb-2'>
                    Email
                  </label>
                  <input type='email' id='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='your.email@example.com' className='w-full px-4 py-2 rounded-lg bg-secondary-700 border border-secondary-600 text-white focus:outline-none focus:ring-2 focus:ring-primary-500' required />
                </div>

                <div className='flex justify-between gap-4'>
                  <button type='button' className='btn-secondary flex-1' onClick={() => setShowEmailModal(false)}>
                    Cancel
                  </button>
                  <button type='submit' className='btn-primary flex-1'>
                    Show Results
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default StyleQuiz
