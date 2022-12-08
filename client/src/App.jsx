import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import LogIn from './components/LogIn'
import './App.css'
import Home from './components/Home'
import NavBar from './components/NavBar'
import SignUp from './components/SignUp'
import AddPlacePage from './components/AddPlacePage'
import PlaceDetails from './components/PlaceDetails'

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

  // const fetchAuthorizedUser = () => {
  //   fetch('/api/authorized_user')
  //     .then((res) => {
  //       if(res.ok){
  //         res.json()
  //           .then((user) => {
  //             updateUser(user)
  //           })
  //       }
  //     })
  // }

  const updateUser = (currentUser) => setCurrentUser(currentUser)

  const addPlace = (newPlace) => setPlaces(places => [...places, newPlace])

  const handleNewContent = (newContent) => {
    setContents((contents) => [...contents, newContent])
}

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
        <Route path='/' element={<Home places={places} updateUser={updateUser} currentUser={currentUser}/>} />
        <Route path='/login' element={<LogIn updateUser={updateUser} />} />
        <Route path='/sign_up' element={<SignUp updateUser={updateUser} />} />
        <Route path='/place/new' element={<AddPlacePage addPlace={addPlace} updateUser={updateUser} currentUser={currentUser} />} />
        <Route path='/places/:id' element={<PlaceDetails updateUser={updateUser} currentUser={currentUser} handleNewContent={handleNewContent}/>}/>
      </Routes>
    </Router>
  )
}

export default App
