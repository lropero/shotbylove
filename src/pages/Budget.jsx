import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Budget = () => {
  // State for form inputs
  const [hours, setHours] = useState(8)
  const [photographers, setPhotographers] = useState(1)
  const [locations, setLocations] = useState(2)
  const [addEngagement, setAddEngagement] = useState(false)
  const [addAlbum, setAddAlbum] = useState(false)
  const [addDrone, setAddDrone] = useState(false)
  const [addPrints, setAddPrints] = useState(false)

  // State for estimated costs
  const [estimate, setEstimate] = useState({
    low: 0,
    high: 0,
    breakdown: {}
  })

  // Update estimate when inputs change
  useEffect(() => {
    // Base pricing (per hour)
    const hourlyRate = {
      low: 250,
      high: 350
    }

    // Calculate base cost
    const baseHours = Math.max(6, hours) // Minimum 6 hours
    const baseCostLow = baseHours * hourlyRate.low
    const baseCostHigh = baseHours * hourlyRate.high

    // Additional photographer
    const additionalPhotographerCost = photographers > 1 ? { low: 600, high: 900 } : { low: 0, high: 0 }

    // Engagement session
    const engagementCost = addEngagement ? { low: 500, high: 800 } : { low: 0, high: 0 }

    // Album
    const albumCost = addAlbum ? { low: 800, high: 1200 } : { low: 0, high: 0 }

    // Drone footage
    const droneCost = addDrone ? { low: 400, high: 600 } : { low: 0, high: 0 }

    // Fine art prints
    const printsCost = addPrints ? { low: 300, high: 500 } : { low: 0, high: 0 }

    // Extra location fee (if more than 1)
    const locationsFee = locations > 1 ? { low: (locations - 1) * 100, high: (locations - 1) * 150 } : { low: 0, high: 0 }

    // Calculate totals
    const totalLow = baseCostLow + additionalPhotographerCost.low + engagementCost.low + albumCost.low + droneCost.low + printsCost.low + locationsFee.low

    const totalHigh = baseCostHigh + additionalPhotographerCost.high + engagementCost.high + albumCost.high + droneCost.high + printsCost.high + locationsFee.high

    // Update state with new estimate
    setEstimate({
      low: totalLow,
      high: totalHigh,
      breakdown: {
        base: { low: baseCostLow, high: baseCostHigh, label: 'Base Coverage' },
        addPhotographer: additionalPhotographerCost.low > 0 ? { low: additionalPhotographerCost.low, high: additionalPhotographerCost.high, label: 'Second Photographer' } : null,
        engagement: engagementCost.low > 0 ? { low: engagementCost.low, high: engagementCost.high, label: 'Engagement Session' } : null,
        album: albumCost.low > 0 ? { low: albumCost.low, high: albumCost.high, label: 'Premium Album' } : null,
        drone: droneCost.low > 0 ? { low: droneCost.low, high: droneCost.high, label: 'Drone Coverage' } : null,
        prints: printsCost.low > 0 ? { low: printsCost.low, high: printsCost.high, label: 'Fine Art Prints' } : null,
        locations: locationsFee.low > 0 ? { low: locationsFee.low, high: locationsFee.high, label: 'Multiple Locations' } : null
      }
    })
  }, [hours, photographers, locations, addEngagement, addAlbum, addDrone, addPrints])

  // Format currency
  const formatCurrency = value => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value)
  }

  return (
    <div className='min-h-screen bg-secondary-950'>
      <div className='container mx-auto px-4 py-12'>
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-10'>
            <h1 className='text-3xl md:text-4xl font-bold mb-4'>Wedding Photography Budget Estimator</h1>
            <p className='text-secondary-300 max-w-2xl mx-auto'>Use this interactive calculator to estimate the cost of your wedding photography package.</p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {/* Form Controls */}
            <div className='card'>
              <h2 className='text-2xl font-bold mb-6'>Customize Your Package</h2>

              {/* Hours of Coverage */}
              <div className='mb-6'>
                <label className='text-white font-medium block mb-2'>Hours of Coverage: {hours}</label>
                <input type='range' min='4' max='12' step='1' value={hours} onChange={e => setHours(parseInt(e.target.value))} className='w-full h-2 bg-secondary-700 rounded-lg appearance-none cursor-pointer' />
                <div className='flex justify-between text-sm text-secondary-400 mt-1'>
                  <span>4 hours</span>
                  <span>8 hours</span>
                  <span>12 hours</span>
                </div>
              </div>

              {/* Number of Photographers */}
              <div className='mb-6'>
                <label className='text-white font-medium block mb-2'>Number of Photographers</label>
                <div className='flex space-x-4'>
                  <button className={`flex-1 py-2 rounded-lg border ${photographers === 1 ? 'bg-primary-700 border-primary-600 text-white' : 'bg-secondary-800 border-secondary-700 text-secondary-300'}`} onClick={() => setPhotographers(1)}>
                    1 Photographer
                  </button>
                  <button className={`flex-1 py-2 rounded-lg border ${photographers === 2 ? 'bg-primary-700 border-primary-600 text-white' : 'bg-secondary-800 border-secondary-700 text-secondary-300'}`} onClick={() => setPhotographers(2)}>
                    2 Photographers
                  </button>
                </div>
              </div>

              {/* Number of Locations */}
              <div className='mb-6'>
                <label className='text-white font-medium block mb-2'>Number of Locations: {locations}</label>
                <input type='range' min='1' max='4' step='1' value={locations} onChange={e => setLocations(parseInt(e.target.value))} className='w-full h-2 bg-secondary-700 rounded-lg appearance-none cursor-pointer' />
                <div className='flex justify-between text-sm text-secondary-400 mt-1'>
                  <span>1 location</span>
                  <span>2-3 locations</span>
                  <span>4 locations</span>
                </div>
              </div>

              {/* Add-ons */}
              <div className='mb-6'>
                <label className='text-white font-medium block mb-2'>Add-ons</label>

                <div className='space-y-3'>
                  <div className='flex items-center'>
                    <input type='checkbox' id='engagement' checked={addEngagement} onChange={e => setAddEngagement(e.target.checked)} className='w-4 h-4 text-primary-600 bg-secondary-700 border-secondary-600 rounded focus:ring-primary-600 focus:ring-offset-secondary-800' />
                    <label htmlFor='engagement' className='ml-2 text-secondary-200'>
                      Engagement Session (+$500-800)
                    </label>
                  </div>

                  <div className='flex items-center'>
                    <input type='checkbox' id='album' checked={addAlbum} onChange={e => setAddAlbum(e.target.checked)} className='w-4 h-4 text-primary-600 bg-secondary-700 border-secondary-600 rounded focus:ring-primary-600 focus:ring-offset-secondary-800' />
                    <label htmlFor='album' className='ml-2 text-secondary-200'>
                      Premium Wedding Album (+$800-1,200)
                    </label>
                  </div>

                  <div className='flex items-center'>
                    <input type='checkbox' id='drone' checked={addDrone} onChange={e => setAddDrone(e.target.checked)} className='w-4 h-4 text-primary-600 bg-secondary-700 border-secondary-600 rounded focus:ring-primary-600 focus:ring-offset-secondary-800' />
                    <label htmlFor='drone' className='ml-2 text-secondary-200'>
                      Drone Photography (+$400-600)
                    </label>
                  </div>

                  <div className='flex items-center'>
                    <input type='checkbox' id='prints' checked={addPrints} onChange={e => setAddPrints(e.target.checked)} className='w-4 h-4 text-primary-600 bg-secondary-700 border-secondary-600 rounded focus:ring-primary-600 focus:ring-offset-secondary-800' />
                    <label htmlFor='prints' className='ml-2 text-secondary-200'>
                      Fine Art Prints Package (+$300-500)
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Estimate Results */}
            <div className='card bg-secondary-900'>
              <h2 className='text-2xl font-bold mb-6'>Your Estimate</h2>

              <div className='mb-8'>
                <div className='text-center p-6 bg-secondary-800 rounded-lg mb-4'>
                  <p className='text-secondary-300 mb-2'>Estimated Investment</p>
                  <h3 className='text-3xl md:text-4xl font-bold text-gradient'>
                    {formatCurrency(estimate.low)} - {formatCurrency(estimate.high)}
                  </h3>
                </div>

                <p className='text-secondary-400 text-sm italic'>This is an estimate. Final pricing may vary based on your specific requirements and date availability.</p>
              </div>

              {/* Cost Breakdown */}
              <div>
                <h3 className='text-lg font-bold mb-4'>Cost Breakdown</h3>

                <div className='space-y-3'>
                  {Object.values(estimate.breakdown)
                    .filter(item => item !== null)
                    .map((item, index) => (
                      <div key={index} className='flex justify-between py-2 border-b border-secondary-700'>
                        <span className='text-secondary-200'>{item.label}</span>
                        <span className='font-medium'>
                          {formatCurrency(item.low)} - {formatCurrency(item.high)}
                        </span>
                      </div>
                    ))}

                  <div className='flex justify-between py-2 font-bold'>
                    <span>Total Estimate</span>
                    <span>
                      {formatCurrency(estimate.low)} - {formatCurrency(estimate.high)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className='mt-12 text-center'>
            <p className='text-secondary-300 mb-6 max-w-2xl mx-auto'>Ready to book your wedding photography package? Let's check if your date is available.</p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link to='/booking' className='btn-primary text-center'>
                Check Your Date
              </Link>
              <Link to='/shot-list' className='btn-secondary text-center'>
                Build Your Shot List
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Budget
