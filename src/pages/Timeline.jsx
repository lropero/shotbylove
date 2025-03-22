import { useState } from 'react'
import { Link } from 'react-router-dom'
import { jsPDF } from 'jspdf'
import { Button } from '../components/ui/button'
import { DatePicker } from '../components/ui/date-picker'

const Timeline = () => {
  const [weddingDate, setWeddingDate] = useState()
  const [formData, setFormData] = useState({
    ceremonyTime: '',
    prepStartTime: '',
    receptionEndTime: '',
    firstLook: false,
    bridesmaidsCount: 0,
    groomsmenCount: 0,
    familyPortraitsSize: 'small',
    venueTravelTime: 0,
    includeGetawayShot: false
  })
  const [timeline, setTimeline] = useState(null)
  const [showEmailModal, setShowEmailModal] = useState(false)
  const [email, setEmail] = useState('')

  const handleChange = e => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setFormData({
      ...formData,
      [e.target.name]: value
    })
  }

  const handleNumberChange = e => {
    const value = parseInt(e.target.value) || 0
    setFormData({
      ...formData,
      [e.target.name]: value
    })
  }

  const formatTimeDisplay = time => {
    const [hours, minutes] = time.split(':')
    const hourInt = parseInt(hours)
    const amPm = hourInt >= 12 ? 'PM' : 'AM'
    const hour12 = hourInt % 12 || 12
    return `${hour12}:${minutes} ${amPm}`
  }

  const addMinutesToTime = (time, minutesToAdd) => {
    if (!time) return ''

    const [hours, minutes] = time.split(':').map(num => parseInt(num))
    const totalMinutes = hours * 60 + minutes + minutesToAdd

    const newHours = Math.floor(totalMinutes / 60) % 24
    const newMinutes = totalMinutes % 60

    return `${newHours.toString().padStart(2, '0')}:${newMinutes.toString().padStart(2, '0')}`
  }

  const subtractMinutesFromTime = (time, minutesToSubtract) => {
    return addMinutesToTime(time, -minutesToSubtract)
  }

  const generateTimeline = () => {
    const timelineItems = []
    const { ceremonyTime, prepStartTime, receptionEndTime, firstLook, bridesmaidsCount, groomsmenCount, familyPortraitsSize, venueTravelTime, includeGetawayShot } = formData

    // Calculate preparations
    if (prepStartTime) {
      timelineItems.push({
        time: prepStartTime,
        description: 'Photography begins: Details & getting ready shots',
        notes: 'Dress, rings, accessories, stationery, prep candids'
      })

      let currentTime = addMinutesToTime(prepStartTime, 60)
      timelineItems.push({
        time: currentTime,
        description: 'Bride finishing hair and makeup',
        notes: 'Candid shots of prep and details'
      })

      currentTime = addMinutesToTime(currentTime, 30)
      timelineItems.push({
        time: currentTime,
        description: 'Bride getting into dress',
        notes: 'Bride with mother/bridesmaids helping'
      })

      currentTime = addMinutesToTime(currentTime, 30)
      if (bridesmaidsCount > 0) {
        timelineItems.push({
          time: currentTime,
          description: 'Bridesmaids first look with bride',
          notes: 'Reaction shots and portraits'
        })
        currentTime = addMinutesToTime(currentTime, 20)
      }
    }

    // Calculate first look if applicable
    if (firstLook && ceremonyTime) {
      const firstLookTime = subtractMinutesFromTime(ceremonyTime, 180)
      timelineItems.push({
        time: firstLookTime,
        description: 'First look',
        notes: 'Private moment between couple'
      })

      const couplePortraitsTime = addMinutesToTime(firstLookTime, 30)
      timelineItems.push({
        time: couplePortraitsTime,
        description: 'Couple portraits',
        notes: 'Romantic portraits after the first look'
      })

      if (bridesmaidsCount > 0 || groomsmenCount > 0) {
        const weddingPartyTime = addMinutesToTime(couplePortraitsTime, 45)
        timelineItems.push({
          time: weddingPartyTime,
          description: 'Wedding party portraits',
          notes: `${bridesmaidsCount} bridesmaids + ${groomsmenCount} groomsmen`
        })
      }
    }

    // Ceremony and post-ceremony
    if (ceremonyTime) {
      const previewVenueTime = subtractMinutesFromTime(ceremonyTime, 60)
      timelineItems.push({
        time: previewVenueTime,
        description: 'Photographer arrives at ceremony venue',
        notes: 'Details, ceremony site, guests arriving'
      })

      const brideHidingTime = subtractMinutesFromTime(ceremonyTime, 30)
      timelineItems.push({
        time: brideHidingTime,
        description: 'Bride hidden away before ceremony',
        notes: 'Final touch-ups, private moments'
      })

      timelineItems.push({
        time: ceremonyTime,
        description: 'Ceremony begins',
        notes: 'Walking down the aisle, vows, rings, first kiss'
      })

      const ceremonyEndTime = addMinutesToTime(ceremonyTime, 30)
      timelineItems.push({
        time: ceremonyEndTime,
        description: 'Ceremony ends',
        notes: 'Recessional, celebration moments'
      })

      // Family photos after ceremony if no first look
      const familyPhotosDuration = familyPortraitsSize === 'small' ? 30 : familyPortraitsSize === 'medium' ? 45 : 60

      const familyPhotosTime = addMinutesToTime(ceremonyEndTime, 15)
      timelineItems.push({
        time: familyPhotosTime,
        description: 'Family formal portraits',
        notes: `${familyPortraitsSize} family portrait session (${familyPhotosDuration} minutes)`
      })

      // If no first look, add couple portraits after family photos
      if (!firstLook) {
        const couplePortraitsTime = addMinutesToTime(familyPhotosTime, familyPhotosDuration)
        timelineItems.push({
          time: couplePortraitsTime,
          description: 'Couple portrait session',
          notes: 'Romantic portraits of the newlyweds'
        })

        if (bridesmaidsCount > 0 || groomsmenCount > 0) {
          const weddingPartyTime = addMinutesToTime(couplePortraitsTime, 45)
          timelineItems.push({
            time: weddingPartyTime,
            description: 'Wedding party portraits',
            notes: `${bridesmaidsCount} bridesmaids + ${groomsmenCount} groomsmen`
          })
        }
      }
    }

    // Reception events
    if (ceremonyTime) {
      let cocktailHourTime
      if (firstLook) {
        cocktailHourTime = addMinutesToTime(ceremonyTime, 45 + venueTravelTime)
      } else {
        // Account for portraits after ceremony
        const portraitsDuration = bridesmaidsCount > 0 || groomsmenCount > 0 ? 90 : 45
        const familyPhotosDuration = familyPortraitsSize === 'small' ? 30 : familyPortraitsSize === 'medium' ? 45 : 60

        cocktailHourTime = addMinutesToTime(ceremonyTime, 45 + familyPhotosDuration + portraitsDuration + venueTravelTime)
      }

      timelineItems.push({
        time: cocktailHourTime,
        description: 'Cocktail hour & reception details',
        notes: 'Decor, tables, venue, guest candids'
      })

      const grandEntranceTime = addMinutesToTime(cocktailHourTime, 60)
      timelineItems.push({
        time: grandEntranceTime,
        description: 'Grand entrance & reception begins',
        notes: 'Introduction of the newlyweds and wedding party'
      })

      const firstDanceTime = addMinutesToTime(grandEntranceTime, 15)
      timelineItems.push({
        time: firstDanceTime,
        description: 'First dance',
        notes: "Newlyweds' first dance as married couple"
      })

      const welcomeSpeechesTime = addMinutesToTime(firstDanceTime, 15)
      timelineItems.push({
        time: welcomeSpeechesTime,
        description: 'Welcome & speeches',
        notes: 'Toasts, speeches from family and friends'
      })

      const dinnerTime = addMinutesToTime(welcomeSpeechesTime, 30)
      timelineItems.push({
        time: dinnerTime,
        description: 'Dinner service',
        notes: 'Table shots, candids of guests dining'
      })

      const cakeCuttingTime = addMinutesToTime(dinnerTime, 60)
      timelineItems.push({
        time: cakeCuttingTime,
        description: 'Cake cutting',
        notes: 'Traditional cake cutting ceremony'
      })

      const openDancingTime = addMinutesToTime(cakeCuttingTime, 15)
      timelineItems.push({
        time: openDancingTime,
        description: 'Open dancing begins',
        notes: 'Dance floor opens to all guests'
      })
    }

    // End of night
    if (receptionEndTime) {
      if (includeGetawayShot) {
        const getawayShotTime = subtractMinutesFromTime(receptionEndTime, 15)
        timelineItems.push({
          time: getawayShotTime,
          description: 'Grand exit preparation',
          notes: 'Setup for sparklers, bubbles, or other send-off'
        })
      }

      timelineItems.push({
        time: receptionEndTime,
        description: 'Photography coverage ends',
        notes: 'Final shots and photographer departure'
      })
    }

    // Sort timeline by time
    timelineItems.sort((a, b) => {
      const [aHours, aMinutes] = a.time.split(':').map(num => parseInt(num))
      const [bHours, bMinutes] = b.time.split(':').map(num => parseInt(num))

      if (aHours !== bHours) {
        return aHours - bHours
      }
      return aMinutes - bMinutes
    })

    setTimeline(timelineItems)
  }

  const handleSubmit = e => {
    e.preventDefault()
    generateTimeline()
  }

  const resetForm = () => {
    setFormData({
      ceremonyTime: '',
      prepStartTime: '',
      receptionEndTime: '',
      firstLook: false,
      bridesmaidsCount: 0,
      groomsmenCount: 0,
      familyPortraitsSize: 'small',
      venueTravelTime: 0,
      includeGetawayShot: false
    })
    setWeddingDate(null)
    setTimeline(null)
  }

  // Define JSPDF to reference jsPDF constructor with uppercase name
  const JSPDF = jsPDF

  const generatePDF = () => {
    if (!timeline) return

    // Create a new document using uppercase constructor
    const doc = new JSPDF()

    // Set up the document
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(20)
    doc.setTextColor(124, 58, 237) // primary-600 color
    doc.text('Your Wedding Day Photography Timeline', 105, 20, { align: 'center' })

    if (weddingDate) {
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(12)
      doc.setTextColor(100, 100, 100)
      const formattedDate = weddingDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
      doc.text(formattedDate, 105, 30, { align: 'center' })
    }

    // Add timeline content
    let yPosition = 45

    timeline.forEach((item, index) => {
      // Check if we need a new page
      if (yPosition > 270) {
        doc.addPage()
        yPosition = 20
      }

      // Add time
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(12)
      doc.setTextColor(15, 23, 42) // secondary-900 color
      doc.text(formatTimeDisplay(item.time), 20, yPosition)

      // Add description
      doc.setFont('helvetica', 'bold')
      doc.setTextColor(124, 58, 237) // primary-600 color
      doc.text(item.description, 50, yPosition)

      // Add notes
      yPosition += 6
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(10)
      doc.setTextColor(100, 100, 100)
      doc.text(item.notes, 50, yPosition)

      yPosition += 10
    })

    // Add tips at the end
    yPosition += 10
    if (yPosition > 250) {
      doc.addPage()
      yPosition = 20
    }

    doc.setFont('helvetica', 'bold')
    doc.setFontSize(14)
    doc.setTextColor(15, 23, 42) // secondary-900 color
    doc.text('Photography Timeline Tips:', 20, yPosition)

    yPosition += 10
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(10)
    doc.setTextColor(80, 80, 80)

    const tips = ['Share this timeline with your wedding planner and vendors.', 'Plan for buffer time - weddings rarely run exactly on schedule.', 'Consider the lighting at your venue when planning outdoor portraits.', 'Communicate any special photo requests to your photographer in advance.', 'Assign a family member to gather people for formal portraits.']

    tips.forEach(tip => {
      if (yPosition > 270) {
        doc.addPage()
        yPosition = 20
      }

      doc.text(`• ${tip}`, 25, yPosition)
      yPosition += 7
    })

    // Footer
    const totalPages = doc.getNumberOfPages()
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i)
      doc.setFont('helvetica', 'italic')
      doc.setFontSize(10)
      doc.setTextColor(150, 150, 150)
      doc.text('Shot by Love - Dreams Collective Studios', 105, 285, { align: 'center' })
      doc.text(`Page ${i} of ${totalPages}`, 195, 285, { align: 'right' })
    }

    doc.save('wedding-day-timeline.pdf')
  }

  return (
    <div className='min-h-screen bg-secondary-950'>
      <div className='container mx-auto px-4 py-12'>
        <div className='max-w-5xl mx-auto'>
          <div className='mb-8'>
            <h1 className='text-3xl md:text-4xl font-bold mb-4 text-center'>Wedding Day Timeline Generator</h1>
            <p className='text-secondary-300 max-w-2xl mx-auto text-center'>Plan the perfect wedding day schedule to ensure beautiful photos and a stress-free experience.</p>
          </div>

          {!timeline
            ? (
              <div className='bg-secondary-900 rounded-lg p-6 mb-8 text-left'>
                <form onSubmit={handleSubmit}>
                  <div className='mb-6'>
                    <h2 className='text-xl font-bold mb-4'>Essential Details</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6'>
                      <div>
                        <label htmlFor='weddingDate' className='block text-white font-medium mb-2'>
                          Wedding Date
                        </label>
                        <DatePicker value={weddingDate} onChange={setWeddingDate} className='bg-secondary-700 border-secondary-600 text-white' />
                      </div>

                      <div>
                        <label htmlFor='ceremonyTime' className='block text-white font-medium mb-2'>
                          Ceremony Start Time
                        </label>
                        <input type='time' id='ceremonyTime' name='ceremonyTime' value={formData.ceremonyTime} onChange={handleChange} required className='w-full px-4 py-2 rounded-lg bg-secondary-700 border border-secondary-600 text-white focus:outline-none focus:ring-2 focus:ring-primary-500' />
                      </div>

                      <div>
                        <label htmlFor='prepStartTime' className='block text-white font-medium mb-2'>
                          When Should Photography Begin?
                        </label>
                        <input type='time' id='prepStartTime' name='prepStartTime' value={formData.prepStartTime} onChange={handleChange} className='w-full px-4 py-2 rounded-lg bg-secondary-700 border border-secondary-600 text-white focus:outline-none focus:ring-2 focus:ring-primary-500' />
                        <p className='text-xs text-secondary-400 mt-1'>Typically 3-4 hours before ceremony for prep photos</p>
                      </div>

                      <div>
                        <label htmlFor='receptionEndTime' className='block text-white font-medium mb-2'>
                          When Should Photography End?
                        </label>
                        <input type='time' id='receptionEndTime' name='receptionEndTime' value={formData.receptionEndTime} onChange={handleChange} className='w-full px-4 py-2 rounded-lg bg-secondary-700 border border-secondary-600 text-white focus:outline-none focus:ring-2 focus:ring-primary-500' />
                      </div>
                    </div>
                  </div>

                  <div className='mb-6'>
                    <h2 className='text-xl font-bold mb-4'>Wedding Party Details</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6'>
                      <div>
                        <label htmlFor='bridesmaidsCount' className='block text-white font-medium mb-2'>
                          Number of Bridesmaids
                        </label>
                        <input type='number' id='bridesmaidsCount' name='bridesmaidsCount' min='0' max='20' value={formData.bridesmaidsCount} onChange={handleNumberChange} className='w-full px-4 py-2 rounded-lg bg-secondary-700 border border-secondary-600 text-white focus:outline-none focus:ring-2 focus:ring-primary-500' />
                      </div>

                      <div>
                        <label htmlFor='groomsmenCount' className='block text-white font-medium mb-2'>
                          Number of Groomsmen
                        </label>
                        <input type='number' id='groomsmenCount' name='groomsmenCount' min='0' max='20' value={formData.groomsmenCount} onChange={handleNumberChange} className='w-full px-4 py-2 rounded-lg bg-secondary-700 border border-secondary-600 text-white focus:outline-none focus:ring-2 focus:ring-primary-500' />
                      </div>

                      <div>
                        <label htmlFor='familyPortraitsSize' className='block text-white font-medium mb-2'>
                          Family Portraits Group Size
                        </label>
                        <select id='familyPortraitsSize' name='familyPortraitsSize' value={formData.familyPortraitsSize} onChange={handleChange} className='w-full px-4 py-2 rounded-lg bg-secondary-700 border border-secondary-600 text-white focus:outline-none focus:ring-2 focus:ring-primary-500'>
                          <option value='small'>Small (immediate family only)</option>
                          <option value='medium'>Medium (some extended family)</option>
                          <option value='large'>Large (extensive family groups)</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor='venueTravelTime' className='block text-white font-medium mb-2'>
                          Travel Time Between Venues (minutes)
                        </label>
                        <input type='number' id='venueTravelTime' name='venueTravelTime' min='0' max='120' value={formData.venueTravelTime} onChange={handleNumberChange} className='w-full px-4 py-2 rounded-lg bg-secondary-700 border border-secondary-600 text-white focus:outline-none focus:ring-2 focus:ring-primary-500' />
                        <p className='text-xs text-secondary-400 mt-1'>If ceremony and reception are at different locations</p>
                      </div>
                    </div>
                  </div>

                  <div className='mb-6'>
                    <h2 className='text-xl font-bold mb-4'>Special Moments</h2>
                    <div className='space-y-3'>
                      <div className='flex items-start'>
                        <input type='checkbox' id='firstLook' name='firstLook' checked={formData.firstLook} onChange={handleChange} className='mr-2 mt-1 h-4 w-4 rounded border-secondary-600 bg-secondary-800 text-primary-600 focus:ring-primary-500' />
                        <div>
                          <label htmlFor='firstLook' className='text-white font-medium cursor-pointer'>
                            Planning a First Look?
                        </label>
                          <p className='text-xs text-secondary-400'>A private moment before the ceremony when couple sees each other for first time</p>
                        </div>
                      </div>

                      <div className='flex items-start'>
                        <input type='checkbox' id='includeGetawayShot' name='includeGetawayShot' checked={formData.includeGetawayShot} onChange={handleChange} className='mr-2 mt-1 h-4 w-4 rounded border-secondary-600 bg-secondary-800 text-primary-600 focus:ring-primary-500' />
                        <div>
                          <label htmlFor='includeGetawayShot' className='text-white font-medium cursor-pointer'>
                            Planning a Grand Exit?
                        </label>
                          <p className='text-xs text-secondary-400'>Sparklers, bubbles, flower petals, etc. as you leave the reception</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='flex flex-col sm:flex-row gap-3'>
                    <Button type='submit' className='w-full sm:w-auto'>
                      Generate Timeline
                    </Button>
                    <Button type='button' variant='outline' onClick={resetForm} className='w-full sm:w-auto'>
                      Reset Form
                    </Button>
                  </div>
                </form>
              </div>
              )
            : (
              <div>
                <div className='flex justify-between items-center mb-4'>
                  <h2 className='text-xl font-bold'>Your Wedding Day Timeline</h2>
                  <div className='flex gap-2'>
                    <Button variant='secondary' onClick={() => setTimeline(null)}>
                      Edit Timeline
                    </Button>
                    <Button onClick={generatePDF}>Download PDF</Button>
                  </div>
                </div>

                <div className='bg-secondary-900 rounded-lg p-6 mb-8 text-left'>
                  {weddingDate && (
                    <div className='mb-6'>
                      <h3 className='text-lg font-semibold text-primary-500 text-left'>
                        {weddingDate.toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </h3>
                    </div>
                  )}

                  <div className='space-y-6'>
                    {timeline.map((item, index) => (
                      <div key={index} className='flex'>
                        <div className='w-24 font-bold text-white text-left'>{formatTimeDisplay(item.time)}</div>
                        <div className='flex-1'>
                          <h4 className='font-semibold text-primary-500 text-left'>{item.description}</h4>
                          <p className='text-sm text-secondary-300 text-left'>{item.notes}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className='mt-8 p-4 bg-secondary-800 rounded-lg'>
                    <h4 className='font-semibold mb-2 text-left'>Timeline Tips:</h4>
                    <ul className='text-sm text-secondary-300 space-y-2 text-left'>
                      <li>• Share this timeline with your wedding planner and vendors.</li>
                      <li>• Plan for buffer time - weddings rarely run exactly on schedule.</li>
                      <li>• Consider the lighting at your venue when planning outdoor portraits.</li>
                      <li>• Communicate any special photo requests to your photographer in advance.</li>
                      <li>• Assign a family member to gather people for formal portraits.</li>
                    </ul>
                  </div>

                  <div className='mt-6 flex flex-col sm:flex-row gap-3'>
                    <Button onClick={generatePDF} className='w-full sm:w-auto'>
                      Download Timeline PDF
                    </Button>
                    <Button variant='secondary' onClick={() => setShowEmailModal(true)} className='w-full sm:w-auto'>
                      Save For Later
                    </Button>
                  </div>
                </div>
              </div>
              )}

          <div>
            <p className='text-secondary-400 text-sm'>
              Need more planning tools? Try our{' '}
              <Link to='/shot-list' className='text-primary-400 hover:text-primary-300'>
                Shot List Builder
              </Link>{' '}
              or explore{' '}
              <Link to='/venues' className='text-primary-400 hover:text-primary-300'>
                Wedding Venues
              </Link>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Email Modal - This would be connected to a real email service in production */}
      {showEmailModal && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'>
          <div className='bg-secondary-800 rounded-lg p-6 max-w-md w-full text-left'>
            <h3 className='text-xl font-bold mb-4 text-left'>Save Your Timeline</h3>
            <p className='text-secondary-300 mb-4 text-left'>Enter your email to save your wedding timeline. We'll send you a copy and keep it for your account.</p>
            <input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Your email address' className='w-full px-4 py-2 rounded-lg bg-secondary-700 border border-secondary-600 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 mb-4' />
            <div className='flex flex-col sm:flex-row gap-2'>
              <Button
                onClick={() => {
                  // In real app, this would send the email
                  window.alert("Timeline saved! We've sent a copy to your email.")
                  setShowEmailModal(false)
                }}
                disabled={!email.includes('@')}
                className='flex-1'
              >
                Save & Send
              </Button>
              <Button variant='outline' onClick={() => setShowEmailModal(false)} className='flex-1'>
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Timeline
