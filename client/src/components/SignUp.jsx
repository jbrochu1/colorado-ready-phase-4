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
        <div className=' p-3 flex flex-col justify-center items-center'>
        <h2>New User Sign Up</h2>
            <form onSubmit={onSubmit} className='p-3 justify-center items-center'>
                <div className='p-2'>
                <label>
                    Username
                </label>
                <input type='text' name='username' value={username} onChange={handleChange} />
                </div>
                <div className='p-2'>
                <label>
                    Email
                </label>
                <input type='text' name='email' value={email} onChange={handleChange} />
                </div>
                <div className='p-2'>
                <label>
                    Password
                </label>
                <input type='password' name='password' placeholder="Password..." value={password} onChange={handleChange} />
                </div>
                <div className='p-2'>
                <label>
                    First Name
                </label>
                <input type='text' name='first_name' value={first_name} onChange={handleChange} />
                </div>
                <div className='p-2'>
                <label>
                    Last Name
                </label>
                <input type='text' name='last_name' value={last_name} onChange={handleChange} />
                </div>
                <div className='p-2'>
                <label>
                    Location (State)
                </label>
                <input type='text' name='location' value={location} onChange={handleChange} />
                </div>
                <div className='p-2'>
                <label>
                    Age
                </label>
                <input type='text' name='age' value={age} onChange={handleChange} />
                </div>
                <div className='p-2'>
                <label>
                    Avatar Image
                </label>
                <input type='text' name='avatar_img' value={avatar_img} onChange={handleChange} />
                </div>
                <div className='p-2'>
                <input type='submit' value='Sign Up' className='p-3 shadow bg-purple-600 hover:bg-purple-500 focus:shadow-outline focus:outline-none text-white font-bold rounded'/>
                </div>
            </form>
            </div>
            { errors ? errors.map(err => <div>{ (err[0]) + ': ' + (err[1]) }</div>) : null }

        </>
    )
}

export default SignUp;