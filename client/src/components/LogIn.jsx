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
        <div className='p-2 max-w-lg'>
            <form onSubmit={onSubmit}>
                <div className='p-2'>
                <label>
                    Username
                </label>
                <input type='text' name='username' className='w-2/3 float-right' value={username} onChange={handleChange} />
                </div>
                <div className='p-2 space-x-2'>
                <label>
                    Email
                </label>
                <input type='text' name='email' className='w-2/3 float-right' value={email} onChange={handleChange} />
                </div>
                <div className='p-2 space-x-2'>
                <label>
                    Password
                </label>
                <input type='password' name='password' className='w-2/3 float-right' value={password} onChange={handleChange} />
                </div>
                <div className='p-2 space-x-2'>
                <input type='submit' value='Log In' className='p-3 shadow bg-indigo-600 hover:bg-indigo-500 focus:shadow-outline focus:outline-none text-white font-bold rounded'/>
                </div>
            </form>
            { errors ? <div>{errors}</div> : null }
        </div>
        </>
    )
}

export default LogIn;