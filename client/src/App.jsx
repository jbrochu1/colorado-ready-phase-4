import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import PlaceMap from './components/PlaceMap'
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

  // USE TO CHECK FOR USER LOGIN
  // useEffect(() => {
  //   fetch('/api/authorized_user')
  //     .then((res) => {
  //       if (res.ok) {
  //         res.json()
  //           .then((user) => {
  //             updateUser(user);
  //             fetchPlaces() // <-- fetch request for particular data
  //           });
  //       } 
  //     })
  // }, [])

  // const fetchPlaces = () => {
  //   fetch('/api/places')
  //     .then((res) => {
  //       if (res.ok) {
  //         res.json().then(setPlaces)
  //       } else {
  //         res.json().then(data => setErrors(data.error))
  //       }
  //     })
  // }

  useEffect(() => {
    fetch('/api/places')
    .then((res) => {
      if (res.ok) {
        res.json()
        .then(setPlaces)
        console.log(res)
      } else {
        res.json()
        .then(data => setErrors(data.error))
        console.log(res)
      }
    })
  }, [])

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
        <Route path='/' element={<Home places={places} updateUser={updateUser}/>} />
        <Route path='/login' element={<LogIn updateUser={updateUser} />} />
        <Route path='/sign_up' element={<SignUp updateUser={updateUser} />} />
        <Route path='/map' element={<PlaceMap/>}/>
      </Routes>
    </Router>
  )
}

export default App
