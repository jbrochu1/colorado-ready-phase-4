import { useState } from 'react'

export default function AddPlacePage({ place, updateUser, currentUser }) {
    const [formData, setFormData] = useState({
        name:'',
        address:'',
        category:'',
        image:'',
        hours:'',
        elevation:'',
        kid_friendly:'',
        user_id: ''
      })
      const [errors, setErrors] = useState([])
    
      const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
      }
    
      function onSubmit(e){
        e.preventDefault()
        fetchAuthorizedUser()

        fetch('/api/places',{
          method:'POST',
          headers: {'Content-Type': 'application/json'},
          body:JSON.stringify({...formData, user_id:currentUser.id})
        })
        .then(res => {
          console.log(currentUser)
          if(res.ok){
            res.json()
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
          <div>
          { errors ? errors.map(e => <div>{e}</div>) : null}
          <form onSubmit={onSubmit}>
            <div>
            <label>Name </label>
            <input type='text' name='name' value={formData.name} onChange={handleChange}  />
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
            <select type='select' name='kid friendly' value={formData.kid_friendly} onChange={handleChange} >
              <option value='true'>Yes</option>
              <option value='false'>No</option>
            </select>
            </div>
            <div>
            <input type='submit' value='Create' />
            </div>
          </form>
          {errors ? errors.map(e => <h2 style={{color:'red'}}>{e.toUpperCase()}</h2>) : null}
          </div>
        )
};