import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

// Pages - we'll create these next
import Home from './pages/Home'
import StyleQuiz from './pages/StyleQuiz'
import Budget from './pages/Budget'
import ShotList from './pages/ShotList'
import Timeline from './pages/Timeline'
import Venues from './pages/Venues'
import Testimonials from './pages/Testimonials'
import Course from './pages/Course'
import Booking from './pages/Booking'
import NotFound from './pages/NotFound'

function App () {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='style-quiz' element={<StyleQuiz />} />
          <Route path='budget' element={<Budget />} />
          <Route path='shot-list' element={<ShotList />} />
          <Route path='timeline' element={<Timeline />} />
          <Route path='venues' element={<Venues />} />
          <Route path='testimonials' element={<Testimonials />} />
          <Route path='course' element={<Course />} />
          <Route path='booking' element={<Booking />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
