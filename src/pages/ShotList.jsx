import { useState } from 'react'
import { Link } from 'react-router-dom'
import { jsPDF } from 'jspdf'
import { Button } from '../components/ui/button'

// Fix constructor name capitalization for linter
const JSPDF = jsPDF

const ShotList = () => {
  const [showEmailModal, setShowEmailModal] = useState(false)
  const [email, setEmail] = useState('')
  const [selectedShots, setSelectedShots] = useState({
    preparation: [],
    ceremony: [],
    portraits: [],
    reception: [],
    details: []
  })
  const [hasGeneratedOnce, setHasGeneratedOnce] = useState(false)

  const shotCategories = {
    preparation: ['Bride getting ready', 'Groom getting ready', 'Bridesmaids helping the bride', 'Groomsmen preparing', 'Bride putting on dress', 'Bride putting on jewelry/accessories', "Bride's first look with bridesmaids", "Bride's first look with parents", "Groom's first look with parents", 'Wedding dress hanging', 'Wedding details (shoes, jewelry, etc.)', 'Getting ready room ambiance', 'Bride doing makeup/hair', 'Wedding party getting ready', 'Emotional moments during preparation'],
    ceremony: ['Venue empty before guests arrive', 'Guests arriving and being seated', 'Wedding party walking down the aisle', 'Bride walking down the aisle', "Groom's reaction to seeing bride", 'Parent reactions', 'Exchanging of vows', 'Ring exchange', 'First kiss as married couple', 'Unity ceremony (candle, sand, etc.)', 'Signing the marriage certificate', 'Recessional (couple walking back up the aisle)', 'Guests throwing petals/confetti', 'Post-ceremony celebrations', 'Ceremony wide shots'],
    portraits: ['Bride and groom first look', 'Bride solo portraits', 'Groom solo portraits', 'Couple portraits', 'Bride with bridesmaids', 'Groom with groomsmen', 'Full wedding party', 'Couple with parents', 'Couple with immediate family', 'Couple with extended family', 'Generational photos', 'Bride with father', 'Groom with mother', 'Candid moments between portrait sessions', 'Golden hour portraits'],
    reception: ['Empty reception venue', 'Table settings and decor', 'Grand entrance', 'First dance', 'Father-daughter dance', 'Mother-son dance', 'Toasts and speeches', 'Guest reactions during speeches', 'Cake cutting', 'Bouquet and garter toss', 'Dance floor action', 'Guests mingling', 'Live band/DJ', 'Food and drinks being served', 'Send-off (sparklers, bubbles, etc.)'],
    details: ['Invitation suite', 'Wedding rings', 'Bridal bouquet', 'Boutonnieres', 'Wedding cake', 'Table centerpieces', 'Menu cards', 'Place settings', 'Seating chart/escort cards', 'Wedding favors', 'Guest book', 'Ceremony programs', 'Wedding signage', 'Special heirlooms', 'Gift table']
  }

  const handleShotToggle = (category, shot) => {
    setSelectedShots(prev => {
      const updatedCategory = prev[category].includes(shot) ? prev[category].filter(s => s !== shot) : [...prev[category], shot]

      return {
        ...prev,
        [category]: updatedCategory
      }
    })
  }

  const handleSelectAll = category => {
    setSelectedShots(prev => ({
      ...prev,
      [category]: [...shotCategories[category]]
    }))
  }

  const handleClearAll = category => {
    setSelectedShots(prev => ({
      ...prev,
      [category]: []
    }))
  }

  const generatePDF = () => {
    const doc = new JSPDF()

    // Set up the document
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(22)
    doc.setTextColor(124, 58, 237) // primary-600 color
    doc.text('Your Wedding Shot List', 105, 20, { align: 'center' })

    doc.setFont('helvetica', 'normal')
    doc.setFontSize(12)
    doc.setTextColor(100, 100, 100)
    doc.text('Created with Shot by Love', 105, 30, { align: 'center' })

    let yPosition = 50

    // For each category with selected shots
    Object.entries(selectedShots).forEach(([category, shots]) => {
      if (shots.length > 0) {
        // Add some space between categories
        if (yPosition > 50) yPosition += 10

        // Check if we need a new page
        if (yPosition > 270) {
          doc.addPage()
          yPosition = 20
        }

        // Add category title
        doc.setFont('helvetica', 'bold')
        doc.setFontSize(16)
        doc.setTextColor(15, 23, 42) // secondary-900 color
        doc.text(category.charAt(0).toUpperCase() + category.slice(1), 20, yPosition)
        yPosition += 10

        // Add selected shots for this category
        doc.setFont('helvetica', 'normal')
        doc.setFontSize(12)
        doc.setTextColor(50, 50, 50)

        shots.forEach(shot => {
          // Check if we need a new page
          if (yPosition > 270) {
            doc.addPage()
            yPosition = 20
          }

          doc.text(`• ${shot}`, 25, yPosition)
          yPosition += 7
        })
      }
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

    doc.save('wedding-shot-list.pdf')
    setHasGeneratedOnce(true)
  }

  const getTotalSelected = () => {
    return Object.values(selectedShots).reduce((total, shots) => total + shots.length, 0)
  }

  return (
    <div className='min-h-screen bg-secondary-950'>
      <div className='container mx-auto px-4 py-12'>
        <div className='max-w-5xl mx-auto'>
          <div className='text-center mb-8'>
            <h1 className='text-3xl md:text-4xl font-bold mb-4'>Shot List Builder</h1>
            <p className='text-secondary-300 max-w-2xl mx-auto'>Create your personalized wedding photography shot list to ensure every special moment is captured. Select the shots that matter most to you!</p>
          </div>

          <div className='bg-secondary-900 rounded-lg p-6 mb-8'>
            <div className='flex items-center justify-between mb-6'>
              <h2 className='text-xl font-bold'>Your Custom Shot List</h2>
              <div className='text-secondary-300'>
                <span className='font-bold text-primary-500'>{getTotalSelected()}</span> shots selected
              </div>
            </div>

            {Object.entries(shotCategories).map(([category, shots]) => (
              <div key={category} className='mb-8'>
                <div className='flex flex-wrap items-center justify-between mb-4'>
                  <h3 className='text-lg font-semibold capitalize mb-2 md:mb-0'>
                    {category}
                    <span className='ml-2 text-sm font-normal text-secondary-400'>
                      ({selectedShots[category].length}/{shots.length})
                    </span>
                  </h3>
                  <div className='flex space-x-2'>
                    <button onClick={() => handleSelectAll(category)} className='text-xs px-2 py-1 text-primary-400 hover:text-primary-300'>
                      Select All
                    </button>
                    <button onClick={() => handleClearAll(category)} className='text-xs px-2 py-1 text-secondary-400 hover:text-secondary-300'>
                      Clear
                    </button>
                  </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                  {shots.map(shot => (
                    <div key={shot} className='flex items-start'>
                      <input type='checkbox' id={`${category}-${shot}`} checked={selectedShots[category].includes(shot)} onChange={() => handleShotToggle(category, shot)} className='mr-2 mt-1 h-4 w-4 rounded border-secondary-600 bg-secondary-800 text-primary-600 focus:ring-primary-500' />
                      <label htmlFor={`${category}-${shot}`} className='text-sm text-secondary-200 cursor-pointer'>
                        {shot}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className='flex flex-col md:flex-row gap-4 justify-center mt-8'>
              <Button onClick={generatePDF} disabled={getTotalSelected() === 0} className='w-full md:w-auto'>
                {getTotalSelected() === 0 ? 'Select shots to continue' : 'Download Shot List PDF'}
              </Button>
              {hasGeneratedOnce && (
                <Button onClick={() => setShowEmailModal(true)} variant='secondary' className='w-full md:w-auto'>
                  Save For Later
                </Button>
              )}
            </div>
          </div>

          {getTotalSelected() === 0 && (
            <div className='text-center text-secondary-400 mb-8'>
              <p>Start by selecting the shots you want captured on your wedding day.</p>
              <p>You can select as many as you'd like from each category!</p>
            </div>
          )}

          <div className='bg-secondary-900 rounded-lg p-6 mb-8'>
            <h2 className='text-xl font-bold mb-4'>Tips for Building Your Shot List</h2>
            <ul className='space-y-2 text-secondary-300'>
              <li>• Focus on shots that are most meaningful to you and your partner</li>
              <li>• Consider your venue's unique features that you want highlighted</li>
              <li>• Remember that candid moments often make for the most memorable photos</li>
              <li>• Share your list with your photographer before the wedding day</li>
              <li>• Trust your photographer's creative expertise along with your preferences</li>
            </ul>
          </div>

          <div className='text-center'>
            <p className='text-secondary-400 text-sm'>
              Need more planning tools? Try our{' '}
              <Link to='/timeline' className='text-primary-400 hover:text-primary-300'>
                Timeline Generator
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
          <div className='bg-secondary-800 rounded-lg p-6 max-w-md w-full'>
            <h3 className='text-xl font-bold mb-4'>Save Your Shot List</h3>
            <p className='text-secondary-300 mb-4'>Enter your email to save your shot list. We'll send you a copy and keep it for your account.</p>
            <input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Your email address' className='w-full px-4 py-2 rounded-lg bg-secondary-700 border border-secondary-600 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 mb-4' />
            <div className='flex flex-col sm:flex-row gap-2'>
              <Button
                onClick={() => {
                  // In real app, this would send the email
                  window.alert("Shot list saved! We've sent a copy to your email.")
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

export default ShotList
