import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SignUp({ updateUser }) {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        location:'',
        age:'',
        avatar_img:''
    })
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    const { username, email, password, first_name, last_name, location, age, avatar_img } = formData

    function onSubmit(e) {
        e.preventDefault()
        const user = {
            username,
            email,
            password,
            first_name,
            last_name,
            location,
            age,
            avatar_img
        }
        fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then((res) => {
                console.log(res)
                console.log(user)
                if (res.ok) {
                    res.json().then(user => {
                        updateUser(user)
                        navigate(`/`)
                    })
                } else {
                    res.json().then(json => setErrors(Object.entries(json.errors)))
                }
            })
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    return (
        <>
        <h2>New User Sign Up</h2>
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
                <input type='password' name='password' placeholder="Password..." value={password} onChange={handleChange} />
                <label>
                    First Name
                </label>
                <input type='text' name='first_name' value={first_name} onChange={handleChange} />
                <label>
                    Last Name
                </label>
                <input type='text' name='last_name' value={last_name} onChange={handleChange} />
                <label>
                    Location (State)
                </label>
                <input type='text' name='location' value={location} onChange={handleChange} />
                <label>
                    Age
                </label>
                <input type='text' name='age' value={age} onChange={handleChange} />
                <label>
                    Avatar Image
                </label>
                <input type='text' name='avatar_img' value={avatar_img} onChange={handleChange} />
                <input type='submit' value='Sign Up'/>
            </form>
            { errors ? errors.map(err => <div>{ (err[0]) + ': ' + (err[1]) }</div>) : null }

        </>
    )
}

export default SignUp;