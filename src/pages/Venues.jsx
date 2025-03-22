import { useState } from 'react'
import { Link } from 'react-router-dom'

const Venues = () => {
  const [activeVenue, setActiveVenue] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterRegion, setFilterRegion] = useState('all')

  const venues = [
    {
      id: 1,
      name: 'Malibu Rocky Oaks Estate',
      region: 'malibu',
      imageUrl: 'https://images.unsplash.com/photo-1519671282429-b44660ead0a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      description: "Perched atop the Santa Monica Mountains, Malibu Rocky Oaks offers breathtaking 360-degree views of rolling vineyards. The estate's helicopter pad creates iconic aerial photos with the stunning landscape as your backdrop.",
      capacity: '50-130',
      style: ['Vineyard', 'Estate', 'Outdoor'],
      bestTimeToPhotograph: 'Golden hour (1-2 hours before sunset)',
      bestSpots: ['Helipad overlook for ceremony and portraits', 'Infinity pool with mountain backdrop', 'Winding driveway entrance'],
      photographyTips: 'Plan for wind at this elevation, especially for veils and dresses. The sun can be intense, so prepare for high contrast lighting in midday shoots.',
      testimonial: {
        couple: 'Jessica & Michael',
        quote: 'Our sunset photos at the helipad were absolutely magical. The vineyard backdrop made for such elegant, romantic images.'
      }
    },
    {
      id: 2,
      name: 'Calamigos Ranch',
      region: 'malibu',
      imageUrl: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
      description: 'Nestled in the Santa Monica Mountains, Calamigos Ranch offers several magical settings including the Birchwood Room with its fairy light-lit redwood trees and the Pavilion with a waterfall backdrop.',
      capacity: '75-250',
      style: ['Rustic', 'Garden', 'Woodland'],
      bestTimeToPhotograph: 'Late afternoon for filtered light through trees',
      bestSpots: ['Ferris wheel for unique couple portraits', 'Redwood deck with string lights', 'Waterfall ceremony site'],
      photographyTips: 'The tree canopy creates dappled light - position subjects carefully. Bring lighting for evening receptions under the fairy lights.',
      testimonial: {
        couple: 'Alyssa & David',
        quote: 'The variety of backdrops at Calamigos gave our wedding album such diversity - from rustic barn shots to elegant waterfall ceremonies.'
      }
    },
    {
      id: 3,
      name: 'The Resort at Pelican Hill',
      region: 'orange-county',
      imageUrl: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1198&q=80',
      description: 'This luxury Newport Coast resort features panoramic ocean views and Italian-inspired architecture. The iconic Rotunda with its ornate dome and ocean backdrop is a breathtaking ceremony location.',
      capacity: '100-500',
      style: ['Luxury', 'Resort', 'Coastal'],
      bestTimeToPhotograph: 'Late afternoon for golden coastal light',
      bestSpots: ['Rotunda for ceremony and portraits', 'Mar Vista lawn with ocean backdrop', 'Golf course landscapes at sunset'],
      photographyTips: 'The white architecture can create harsh reflections in midday sun. Coastal wind can be strong - prepare brides with veils accordingly.',
      testimonial: {
        couple: 'Stephanie & Anthony',
        quote: 'The classic architecture and coastal views gave our wedding such an elegant, timeless quality. Our photos look like they could be from a magazine.'
      }
    },
    {
      id: 4,
      name: 'Rancho Las Lomas',
      region: 'orange-county',
      imageUrl: 'https://images.unsplash.com/photo-1439539698758-ba2680ecadb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      description: 'This Spanish-style estate and zoological garden offers unique settings with Moroccan, Spanish, and rustic California influences. The property features exotic animals, including white tigers and zebras.',
      capacity: '50-200',
      style: ['Spanish', 'Garden', 'Unique'],
      bestTimeToPhotograph: 'Mid-to-late afternoon for warm light on the terracotta tiles',
      bestSpots: ['Theatre for ceremonies', 'Casa Blanca with colorful Spanish tiles', 'Grand Salon reception space'],
      photographyTips: 'The venue has many shaded areas perfect for harsh midday lighting. Animal encounters must be scheduled in advance for photo opportunities.',
      testimonial: {
        couple: 'Maria & Robert',
        quote: 'Our guests were amazed by the unique venue, and our portraits with the exotic background gave our wedding album such character.'
      }
    },
    {
      id: 5,
      name: 'Parker Palm Springs',
      region: 'palm-springs',
      imageUrl: 'https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80',
      description: 'A mid-century modern retreat with colorful, eclectic Jonathan Adler design. The property offers lovely garden settings, striking decor, and iconic Palm Springs architecture.',
      capacity: '40-200',
      style: ['Mid-Century', 'Desert', 'Boutique'],
      bestTimeToPhotograph: 'Early morning or late afternoon to avoid desert heat',
      bestSpots: ['The Gene Autry Residence', 'Colorful hallways and doors', 'Secluded garden areas'],
      photographyTips: 'Use the colorful architectural elements for framing. Harsh desert sun means finding shade is crucial for midday shoots.',
      testimonial: {
        couple: 'Taylor & James',
        quote: 'The retro vibe of our venue gave our photos such a unique, editorial quality. Every corner of the property offered another perfect backdrop.'
      }
    },
    {
      id: 6,
      name: 'The Ebell of Los Angeles',
      region: 'los-angeles',
      imageUrl: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      description: 'A historic Italian-style building with multiple event spaces including a grand theater, courtyard garden, and elegant art salon. The 1920s architecture provides a timeless backdrop.',
      capacity: '75-350',
      style: ['Historic', 'Elegant', 'Urban'],
      bestTimeToPhotograph: 'Midday for the garden courtyard, any time for elegant indoor spaces',
      bestSpots: ['Grand staircase for bridal portraits', 'Art salon with period architecture', 'Courtyard garden'],
      photographyTips: 'Indoor spaces have challenging lighting - bring additional lighting. The historic details shine with careful composition.',
      testimonial: {
        couple: 'Emma & Christopher',
        quote: 'The vintage elegance of The Ebell gave our wedding such sophistication. The architectural details made every photo look like a classic film still.'
      }
    },
    {
      id: 7,
      name: 'Hummingbird Nest Ranch',
      region: 'santa-susana',
      imageUrl: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
      description: 'A 126-acre Spanish villa estate nestled in the Santa Susana Mountains offering panoramic views, olive trees, and authentic Spanish architecture.',
      capacity: '100-500',
      style: ['Spanish Estate', 'Mountain', 'Outdoor'],
      bestTimeToPhotograph: 'Golden hour for mountain backdrop',
      bestSpots: ['Villa courtyard with fountain', 'Olive grove paths', 'Mountain overlook'],
      photographyTips: 'The property is vast - scout locations in advance. Mountain backdrop works beautifully at sunset for silhouettes.',
      testimonial: {
        couple: 'Sophia & Daniel',
        quote: 'The grandeur of this estate made our wedding feel like a European destination event. The mountain sunset photos are absolutely breathtaking.'
      }
    },
    {
      id: 8,
      name: 'SmogShoppe',
      region: 'los-angeles',
      imageUrl: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      description: 'A former smog check station transformed into an urban oasis with vertical gardens. This eco-friendly venue offers a unique blend of industrial meets bohemian design.',
      capacity: '50-150',
      style: ['Industrial', 'Bohemian', 'Eco-Friendly'],
      bestTimeToPhotograph: 'Afternoon for best lighting in the courtyard',
      bestSpots: ['Living wall backdrop', 'String light courtyard', 'Industrial doors and details'],
      photographyTips: 'The green walls provide constant backdrops regardless of season. The intimate space works well with wider lenses.',
      testimonial: {
        couple: 'Lauren & Ben',
        quote: 'Our wedding had such a cool, laid-back vibe that perfectly matched our personalities. The urban garden setting created such interesting textures in our photos.'
      }
    },
    {
      id: 9,
      name: 'Palm Springs Golf Course',
      region: 'palm-springs',
      imageUrl: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      description: 'This expansive desert golf course offers stunning mountain vistas and manicured greens. The contrast of lush fairways against the rugged desert landscape creates a dramatic setting for wedding photography.',
      capacity: '80-300',
      style: ['Golf Club', 'Desert', 'Outdoor'],
      bestTimeToPhotograph: 'Golden hour when the desert mountains glow pink and orange',
      bestSpots: ['18th hole with mountain backdrop', 'Stone bridge over water features', 'Clubhouse terrace with panoramic views'],
      photographyTips: 'Use golf carts to quickly access different locations around the course. The harsh desert sun creates strong shadows midday, so plan shoots for early morning or late afternoon.',
      testimonial: {
        couple: 'Amanda & Jason',
        quote: 'Our wedding photos on the golf course are incredible - the emerald greens against the desert mountains created such a stunning contrast. The sunset shots are absolutely magical.'
      }
    }
  ]

  const filteredVenues = venues.filter(venue => {
    // Apply region filter
    if (filterRegion !== 'all' && venue.region !== filterRegion) {
      return false
    }

    // Apply search filter
    if (searchTerm) {
      const search = searchTerm.toLowerCase()
      return venue.name.toLowerCase().includes(search) || venue.description.toLowerCase().includes(search) || venue.style.some(style => style.toLowerCase().includes(search))
    }

    return true
  })

  const regions = [
    { id: 'all', name: 'All Regions' },
    { id: 'malibu', name: 'Malibu' },
    { id: 'orange-county', name: 'Orange County' },
    { id: 'palm-springs', name: 'Palm Springs' },
    { id: 'los-angeles', name: 'Los Angeles' },
    { id: 'santa-susana', name: 'Santa Susana' }
  ]

  return (
    <div className='min-h-screen bg-secondary-950'>
      <div className='container mx-auto px-4 py-12'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-8'>
            <h1 className='text-3xl md:text-4xl font-bold mb-4'>Venue Lookbook Gallery</h1>
            <p className='text-secondary-300 max-w-2xl mx-auto'>Explore beautiful SoCal wedding venues with sample photos and insider tips from past shoots.</p>
          </div>

          <div className='mb-8'>
            <div className='bg-secondary-900 rounded-lg p-4 mb-4'>
              <div className='flex flex-col md:flex-row gap-4'>
                <div className='flex-1'>
                  <input type='text' placeholder='Search venues by name, style, or features...' value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className='w-full px-4 py-2 rounded-lg bg-secondary-700 border border-secondary-600 text-white focus:outline-none focus:ring-2 focus:ring-primary-500' />
                </div>

                <div>
                  <select value={filterRegion} onChange={e => setFilterRegion(e.target.value)} className='w-full px-4 py-2 rounded-lg bg-secondary-700 border border-secondary-600 text-white focus:outline-none focus:ring-2 focus:ring-primary-500'>
                    {regions.map(region => (
                      <option key={region.id} value={region.id}>
                        {region.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {filteredVenues.length === 0
              ? (
                <div className='text-center py-8'>
                  <p className='text-secondary-300'>No venues found matching your criteria. Try adjusting your search.</p>
                </div>
                )
              : (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                  {filteredVenues.map(venue => (
                    <div key={venue.id} className='bg-secondary-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer' onClick={() => setActiveVenue(venue)}>
                      <div className='relative h-52'>
                        <img src={venue.imageUrl} alt={venue.name} className='w-full h-full object-cover' />
                        <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4'>
                          <div className='flex items-center justify-between'>
                            <h3 className='text-lg font-semibold text-white'>{venue.name}</h3>
                            <div className='text-xs bg-primary-600 text-white px-2 py-1 rounded'>{venue.capacity}</div>
                          </div>
                        </div>
                      </div>
                      <div className='p-4'>
                        <div className='flex flex-wrap gap-2 mb-3'>
                          {venue.style.map((style, index) => (
                            <span key={index} className='text-xs bg-secondary-800 text-secondary-200 px-2 py-1 rounded-full'>
                              {style}
                            </span>
                          ))}
                        </div>
                        <p className='text-secondary-300 text-sm line-clamp-2'>{venue.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                )}
          </div>

          <div className='text-center'>
            <p className='text-secondary-400 text-sm'>
              Ready to start planning? Try our{' '}
              <Link to='/timeline' className='text-primary-400 hover:text-primary-300'>
                Timeline Generator
              </Link>{' '}
              or check our{' '}
              <Link to='/booking' className='text-primary-400 hover:text-primary-300'>
                Availability
              </Link>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Venue Details Modal */}
      {activeVenue && (
        <div className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4'>
          <div className='bg-secondary-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto'>
            <div className='relative'>
              <img src={activeVenue.imageUrl} alt={activeVenue.name} className='w-full h-64 md:h-80 object-cover' />
              <button onClick={() => setActiveVenue(null)} className='absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 text-white'>
                <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                  <line x1='18' y1='6' x2='6' y2='18' />
                  <line x1='6' y1='6' x2='18' y2='18' />
                </svg>
              </button>
              <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6'>
                <h2 className='text-2xl md:text-3xl font-bold text-white'>{activeVenue.name}</h2>
              </div>
            </div>

            <div className='p-6'>
              <div className='flex flex-wrap gap-2 mb-4'>
                {activeVenue.style.map((style, index) => (
                  <span key={index} className='text-sm bg-secondary-800 text-secondary-200 px-3 py-1 rounded-full'>
                    {style}
                  </span>
                ))}
                <span className='text-sm bg-primary-900 text-primary-200 px-3 py-1 rounded-full'>Capacity: {activeVenue.capacity}</span>
              </div>

              <div className='mb-6'>
                <h3 className='text-xl font-semibold mb-2'>About this Venue</h3>
                <p className='text-secondary-300'>{activeVenue.description}</p>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                <div>
                  <h3 className='text-lg font-semibold mb-2'>Photography Tips</h3>
                  <p className='text-secondary-300 mb-2'>{activeVenue.photographyTips}</p>
                  <p className='text-secondary-300'>
                    <span className='font-medium'>Best time to photograph:</span> {activeVenue.bestTimeToPhotograph}
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-semibold mb-2'>Best Photo Spots</h3>
                  <ul className='list-disc list-inside text-secondary-300 space-y-1'>
                    {activeVenue.bestSpots.map((spot, index) => (
                      <li key={index}>{spot}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className='bg-secondary-800 rounded-lg p-4 mb-6'>
                <div className='flex items-start'>
                  <div className='text-4xl text-primary-500 mr-4'>❝</div>
                  <div>
                    <p className='text-secondary-200 italic'>{activeVenue.testimonial.quote}</p>
                    <p className='text-primary-400 mt-2'>— {activeVenue.testimonial.couple}</p>
                  </div>
                </div>
              </div>

              <div className='flex flex-col sm:flex-row gap-3 justify-center'>
                <Link to='/booking' className='btn-primary text-center'>
                  Check Your Date
                </Link>
                <button onClick={() => setActiveVenue(null)} className='btn-secondary text-center'>
                  Back to Gallery
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Venues
