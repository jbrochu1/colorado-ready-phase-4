import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import LogIn from './components/LogIn'
import './App.css'
import Home from './components/Home'

function App() {
  const [places, setPlaces] = useState([])
  const [errors, setErrors] = useState(false)
  const [currentUser, setCurrentUser] = useState(false)
  const [contents, setContents] = useState([])

  useEffect(() => {
    fetch('/authorized_user')
      .then((res) => {
        if (res.ok) {
          res.json()
            .then((user) => {
              updateUser(user);
              fetchPlaces()
            });
        }
      })
  }, [])

  const fetchPlaces = () => {
    fetch('/places')
      .then((res) => {
        if (res.ok) {
          res.json().then(setPlaces)
        } else {
          res.json().then(data => setErrors(data.error))
        }
      })
  }

  const updateUser = (user) => setCurrentUser(user)

  const addPlace = (place) => setPlaces(current => [...current, place])

  const updatePlace = (updatedPlace) => setPlaces(current => {
    return current.map(place => {
      if(place.id === updatedPlace.id){
        return updatedPlace
      } else {
        return place
      }
    })
  })

  const deletePlace = (id) => setPlaces(current => current.filter(place => place.id !== id))

  if (errors) return <h1>{errors}</h1>

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home places={places}/>} />
        <Route path='/login' element={<LogIn updateUser={updateUser} />} />
      </Routes>
    </Router>
  )
}

export default App
