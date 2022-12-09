import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LogIn({ updateUser }) {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    // DESTRUCTURE FORMDATA OBJECT
    const { username, email, password } = formData

    // SENDS REQUEST TO GET USERS AND SET SESSIONS
    function onSubmit(e) {
        e.preventDefault()
        const user = {
            username,
            email,
            password
        }
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(console.log(user))
            .then((res) => {
                if (res.ok) {
                    res.json().then(user => {
                        updateUser(user)
                        navigate(`/`)
                    })
                } else {
                    res.json()
                    .then(json => setErrors(json.errors))
                }
            })
    }

    // HANDLER FUNCTION SETS STATE FOR FORM DATA BASED ON INPUT
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    return (
        <>
        {}
            <form onSubmit={onSubmit}>
                <label>
                    Username
                </label>
                <input type='text' name='username' value={username} onChange={handleChange} />
                <label>
                    Email
                </label>
                <input type='text' name='email' value={email} onChange={handleChange} />
                <label>
                    Password
                </label>
                <input type='password' name='password' value={password} onChange={handleChange} />
                <input type='submit' value='Log In'/>
            </form>
            { errors ? <div>{errors}</div> : null }
        </>
    )
}

export default LogIn;