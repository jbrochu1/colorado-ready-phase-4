import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import LogIn from './components/LogIn'
import './App.css'
import Home from './components/Home'
import NavBar from './components/NavBar'
import SignUp from './components/SignUp'
import AddPlacePage from './components/AddPlacePage'
import PlaceDetails from './components/PlaceDetails'
import UserPage from './components/UserPage'

function App() {
  const [places, setPlaces] = useState([])
  const [errors, setErrors] = useState(false)
  const [currentUser, setCurrentUser] = useState(false)
  // const [contents, setContents] = useState([])

  // CHECK FOR USER LOGIN
  useEffect(() => {
    fetch('/api/authorized_user')
      .then((res) => {
        if (res.ok) {
          res.json()
            .then((user) => {
              updateUser(user);
              fetchPlaces();
            });
        } else {
          updateUser(false)
          fetchPlaces();
        }
      })
  }, [])

  // SET ALL PLACES TO STATE
  const fetchPlaces = () => {
    fetch('/api/places')
      .then((res) => {
        if (res.ok) {
          res.json().then(setPlaces)
        } else {
          res.json().then(data => setErrors(data.error))
        }
      })
  }

  // STATE HANDLER FOR USER V. GUEST
  const updateUser = (currentUser) => setCurrentUser(currentUser)

  // HANDLER FUNCTION TO POST NEW PLACE
  const addPlace = (newPlace) => setPlaces(places => [...places, newPlace])

  // ERRORS CATCH 
  if (errors) return <h1>{errors}</h1>

  return (
    <Router>
      <NavBar updateUser={updateUser} currentUser={currentUser} />
      <Routes>
        <Route path='/' element={<Home places={places} updateUser={updateUser} currentUser={currentUser} />} />
        <Route path='/login' element={<LogIn updateUser={updateUser} />} />
        <Route path='/sign_up' element={<SignUp updateUser={updateUser} />} />
        <Route path='/place/new' element={<AddPlacePage addPlace={addPlace} updateUser={updateUser} currentUser={currentUser} />} />
        <Route path='/places/:id' element={<PlaceDetails updateUser={updateUser} currentUser={currentUser} />} />
        <Route path='/profile' element={<UserPage currentUser={currentUser} />} />
      </Routes>
    </Router>
  )
}

export default App
