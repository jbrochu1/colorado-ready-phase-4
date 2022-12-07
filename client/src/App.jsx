import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import LogIn from './components/LogIn'
import './App.css'
import Home from './components/Home'
import NavBar from './components/NavBar'
import SignUp from './components/SignUp'

function App() {
  const [places, setPlaces] = useState([])
  const [errors, setErrors] = useState(false)
  const [currentUser, setCurrentUser] = useState(false)
  const [contents, setContents] = useState([])

  useEffect(() => {
    fetch('/api/authorized_user')
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
    fetch('/api/places')
      .then((res) => {
        if (res.ok) {
          res.json().then(setPlaces)
        } else {
          res.json().then(data => setErrors(data.error))
        }
      })
  }

  // useEffect(() => {
  //   fetch('http://localhost:3000/places')
  //   .then((response) => response.json())
  //   .then(places => setPlaces(places))
  //   .then(console.log(places))
  // })

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
      <NavBar updateUser={updateUser}/>
      <Routes>
        <Route path='/' element={<Home places={places}/>} />
        <Route path='/login' element={<LogIn updateUser={updateUser} />} />
        <Route path='/sign_up' element={<SignUp updateUser={updateUser} />} />
      </Routes>
    </Router>
  )
}

export default App
