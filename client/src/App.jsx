import { useState, useEffect } from 'react'
import LogIn from './components/LogIn'
import './App.css'
import Home from './components/Home'

function App() {
  const [places, setPlaces] = useState([])
  const [errors, setErrors] = useState(false)
  const [currentUser, setCurrentUser] = useState(false)

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
  // useEffect(() => {
  //   fetch('/places')
  //   .then((r) => r.json())
  //   .then(setPlaces)
  // }, [])

  const updateUser = (user) => setCurrentUser(user)

  if (errors) return <h1>{errors}</h1>

  return (
    <>
      <LogIn updateUser={updateUser} />
      <div>{currentUser}</div>
      <Home places={places}/>
    </>
  )
}

export default App
