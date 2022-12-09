import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddPlacePage({ currentUser }) {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    category: '',
    image: '',
    hours: '',
    elevation: '',
    user_id: ''
  })
  const [kidFriendly, setKidFriendly] = useState(false)
  const [errors, setErrors] = useState([])
  const navigate = useNavigate()


  // SETS FORMDATA FOR INPUT ELEMENTS BELOW
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  // SETS STATE FOR BOOLEAN VALUE
  const handleKidFriendly = (e) => {
    setKidFriendly(toBool(e.target.value))
  }

  // HANDLES KID_FRIENDLY EVENT VALUE AND CONVERTS FROM STRING TYPE
  const toBool = (value) => {
    if (value && typeof value === "string") {
      if (value.toLowerCase() === "true") return true;
      if (value.toLowerCase() === "false") return false;
    }
    console.log(value)
    return value;
  }

  // PERSISTS NEW PLACE TO DATABASE & REFRESHES PAGE
  function onSubmit() {
    fetch('/api/places', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, kid_friendly: kidFriendly, user_id: currentUser.id })
    })
      .then(res => {
        if (res.ok) {
          res.json();
          navigate('/');
        } else {
          //Display errors
          res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
        }
      })
  }

  return (
    <div>
      {errors ? errors.map(e => <div>{e}</div>) : null}
      <form onSubmit={onSubmit}>
        <div>
          <label>Name </label>
          <input type='text' name='name' value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label> Address</label>
          <input type='text' name='address' value={formData.address} onChange={handleChange} />
        </div>
        <div>
          <label>Category</label>
          <input type='text' name='category' value={formData.category} onChange={handleChange} />
        </div>
        <div>
          <label>Image</label>
          <input type='text' name='image' value={formData.image} onChange={handleChange} />
        </div>
        <div>
          <label>Hours</label>
          <input type='text' name='hours' value={formData.hours} onChange={handleChange} />
        </div>
        <div>
          <label>Elevation</label>
          <input type='text' name='elevation' value={formData.elevation} onChange={handleChange} />
        </div>
        <div>
          <label>Kid Friendly</label>
          <select type='select' name='kid friendly' value={kidFriendly} onChange={handleKidFriendly} >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div>
          <input type='submit' value='Create' />
        </div>
      </form>
      {errors ? errors.map(e => <h2 style={{ color: 'red' }}>{e.toUpperCase()}</h2>) : null}
    </div>
  )
};