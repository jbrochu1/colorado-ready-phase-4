import { useState } from "react"

export default function CommentForm({ place, currentUser, handleNewContent, updateUser }) {
  const [errors, setErrors] = useState(false)
  const [formData, setFormData] = useState({
    comment: '',
    rating: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const fetchAuthorizedUser = () => {
    fetch('/api/authorized_user')
      .then((res) => {
        if (res.ok) {
          res.json()
            .then((currentUser) => {
              updateUser(currentUser)
            })
        }
      })
  }

  function onSubmit(e) {
    // e.preventDefault();
    fetchAuthorizedUser();

    fetch('/api/contents', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, place_id: place.id, user_id: currentUser.id })
    })
      .then(res => {
        console.log(currentUser)
        if (res.ok) {
          res.json()
            .then((newContent) => { handleNewContent(newContent) })
        }
        else {
          //Display errors
          res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
        }

      })
  }

  return (
    <div>
      {errors ? errors.map(e => <div>{e}</div>) : null}
      {currentUser ?
        <form onSubmit={onSubmit}>
          <label>Comment </label>
          <input type='text' name='comment' value={formData.comment} onChange={handleChange} />

          <label> Rating</label>
          <input type='dropdown' name='rating' value={formData.rating} onChange={handleChange} />

          <input type='submit' value='Create' />
        </form> : null}
      {errors ? errors.map(e => <h2 style={{ color: 'red' }}>{e.toUpperCase()}</h2>) : null}
    </div>
  )
};