import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Resources from './pages/Resources'
import Prevention from './pages/Prevention'
import Map from './pages/Map'
import Navbar from './components/Navbar'
import Loader from './components/Loader'

function AppContent() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events')
      const { events } = await res.json()

      setEventData(events)
      setLoading(false)

      return true;
    }

    fetchEvents()
  }, [])

  useEffect(() => {
    if (location.pathname === '/map') {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [location.pathname])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={!loading ? <Map eventData={eventData} /> : <Loader />} />
        <Route path="/prevention" element={<Prevention />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
