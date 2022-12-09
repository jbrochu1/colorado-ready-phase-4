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

      const fetchAuthorizedUser = () => {
        fetch('/api/authorized_user')
          .then((res) => {
            if(res.ok){
              res.json()
                .then((currentUser) => {
                  updateUser(currentUser)
                })
            }
          })
      }
      
        return (
          <div class="w-full max-w-md">
          { errors ? errors.map(e => <div>{e}</div>) : null}
          <form onSubmit={onSubmit} className='p-3'>
            <div className='p-2 space-x-2'>
            <label>Name </label>
            <input type='text' name='name' value={formData.name} onChange={handleChange}  />
            </div>
            <div className='p-2 space-x-2'>
            <label> Address</label>
            <input type='text' name='address' value={formData.address} onChange={handleChange} />
            </div>
            <div className='p-2 space-x-2'>
            <label>Category</label>
            <input type='text' name='category' value={formData.category} onChange={handleChange} />
            </div>
            <div className='p-2 space-x-2'>
            <label>Image</label>
            <input type='text' name='image' value={formData.image} onChange={handleChange} />
            </div>
            <div className='p-2 space-x-2'>
            <label>Hours</label>
            <input type='text' name='hours' value={formData.hours} onChange={handleChange} />
            </div>
            <div className='p-2 space-x-2'>
            <label>Elevation</label>
            <input type='text' name='elevation' value={formData.elevation} onChange={handleChange} />
            </div>
            <div className='p-2 space-x-2'>
            <label>Kid Friendly</label>
            <select type='select' name='kid friendly' value={formData.kid_friendly} onChange={handleChange} >
              <option value={kidFriendly}>Yes</option>
              <option value={!kidFriendly}>No</option>
            </select>
          {/* <label>Kid Friendly</label>
          <input type='checkbox' name='kid_friendly' value={kidFriendly} onCheck={handleKidFriendly} checked/> */}
        </div>
        <div className='p-3'>
          <input type='submit' value='Create' className='p-3 shadow bg-indigo-600 hover:bg-indigo-500 focus:shadow-outline focus:outline-none text-white font-bold rounded' />
        </div>
      </form>
      {errors ? errors.map(e => <h2 style={{ color: 'red' }}>{e.toUpperCase()}</h2>) : null}
    </div>
  )
};