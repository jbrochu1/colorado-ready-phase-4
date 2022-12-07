import { useState } from "react"
export default function CommentForm() {

    const [formData, setFormData] = useState({
        comment:'',
        rating:'',
        user_id:'',
        place_id:''
      })
      const [errors, setErrors] = useState([])
    
      const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
      }
    
      function onSubmit(e){
        e.preventDefault()
        
        fetch('api/content',{
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
            <label>Comment </label>
            <input type='text' name='name' value={formData.name} onChange={handleChange} />
            
            <label> Rating</label>
            <input type='text' name='address' value={formData.address} onChange={handleChange} />
          
            <input type='submit' value='Create' />
          </form>
          {errors?errors.map(e => <h2 style={{color:'red'}}>{e.toUpperCase()}</h2>):null}
          </div>
        )  
};