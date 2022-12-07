export default function AddPlacePage() {
    const [formData, setFormData] = useState({
        name:'',
        address:'',
        category:'',
        image:'',
        hours:'',
        elevation:'',
        kid_friendly:'',
        user_id:''
      })
      const [errors, setErrors] = useState([])
    
      const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
      }
    
      function onSubmit(e){
        e.preventDefault()
        
        fetch('api/places',{
          method:'POST',
          headers: {'Content-Type': 'application/json'},
          body:JSON.stringify({...formData})
        })
        .then(res => {
          if(res.ok){
            res.json().then(addPlace)
          } else {
            //Display errors
            res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
          }
        })
      }
        return (
          <div>
          {errors?errors.map(e => <div>{e}</div>):null}
          <form onSubmit={onSubmit}>
            <label>Name </label>
            <input type='text' name='name' value={formData.name} onChange={handleChange} />
            
            <label> Address</label>
            <input type='text' name='address' value={formData.address} onChange={handleChange} />
          
            <label>Category</label>
            <input type='number' name='category' value={formData.category} onChange={handleChange} />
          
            <label>Image</label>
            <input type='text' name='image' value={formData.image} onChange={handleChange} />
          
            <label>Hours</label>
            <input type='text' name='hours' value={formData.hours} onChange={handleChange} />
          
            <label>Elevation</label>
            <textarea type='text' rows='4' cols='50' name='elevation' value={formData.elevation} onChange={handleChange} />

            <label>Kid Friendly</label>
            <textarea type='text' rows='4' cols='50' name='kid friendly' value={formData.kid_friendly} onChange={handleChange} />
          
            <input type='submit' value='Create' />
          </form>
          {errors?errors.map(e => <h2 style={{color:'red'}}>{e.toUpperCase()}</h2>):null}
          </div>
        )
}
import { useState } from 'react'

export default function AddPlacePage() {
    const [formData, setFormData] = useState({
        name:'',
        address:'',
        category:'',
        image:'',
        hours:'',
        elevation:'',
        kid_friendly:'',
        user_id:''
      })
      const [errors, setErrors] = useState([])
    
      const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
      }
    
      function onSubmit(e){
        e.preventDefault()
        
        fetch('api/places',{
          method:'POST',
          headers: {'Content-Type': 'application/json'},
          body:JSON.stringify({...formData})
        })
        .then(res => {
          if(res.ok){
            res.json().then(addPlace)
          } else {
            //Display errors
            res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
          }
        })
      }
        return (
          <div>
          {errors?errors.map(e => <div>{e}</div>):null}
          <form onSubmit={onSubmit}>
            <label>Name </label>
            <input type='text' name='name' value={formData.name} onChange={handleChange} />
            
            <label> Address</label>
            <input type='text' name='address' value={formData.address} onChange={handleChange} />
          
            <label>Category</label>
            <input type='number' name='category' value={formData.category} onChange={handleChange} />
          
            <label>Image</label>
            <input type='text' name='image' value={formData.image} onChange={handleChange} />
          
            <label>Hours</label>
            <input type='text' name='hours' value={formData.hours} onChange={handleChange} />
          
            <label>Elevation</label>
            <textarea type='text' rows='4' cols='50' name='elevation' value={formData.elevation} onChange={handleChange} />

            <label>Kid Friendly</label>
            <textarea type='text' rows='4' cols='50' name='kid friendly' value={formData.kid_friendly} onChange={handleChange} />
          
            <input type='submit' value='Create' />
          </form>
          {errors?errors.map(e => <h2 style={{color:'red'}}>{e.toUpperCase()}</h2>):null}
          </div>
        )
}