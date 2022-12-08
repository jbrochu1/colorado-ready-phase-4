import { useState } from "react"

export default function CommentForm({ place, updateUser, onNewContent, currentUser }) {
  const [formData, setFormData] = useState({
        comment:'',
        rating:'',
        user_id: '',
        place_id: ''
      })
      const [errors, setErrors] = useState([])
    
      const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
      }
    
      function onSubmit(e){
        e.preventDefault();
        fetchAuthorizedUser();
        
        fetch('/api/contents',{
          method:'POST',
          headers: {'Content-Type': 'application/json'},
          body:JSON.stringify({...formData, place_id:place.id, user_id:currentUser.id})
        })
        .then(res => {
          console.log(currentUser)
          if(res.ok){
            res.json()
            .then(data => onNewContent(data))
          } 
          else {
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
          {errors?errors.map(e => <div>{e}</div>):null}
          <form onSubmit={onSubmit}>
            <label>Comment </label>
            <input type='text' name='comment' value={formData.comment} onChange={handleChange} />
            
            <label> Rating</label>
            <input type='dropdown' name='rating' value={formData.rating} onChange={handleChange} />
          
            <input type='submit' value='Create' />
          </form>
          {errors?errors.map(e => <h2 style={{color:'red'}}>{e.toUpperCase()}</h2>):null}
          </div>
        )  
};