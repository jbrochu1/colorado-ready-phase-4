import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function UserPage() {
    const [user, setUser] = useState()
    // const [errors, setErrors] = useState([])

    const params = useParams
    const { id } = params

    useEffect(() => {
        fetch(`/users/${id}`)
            .then((r) => r.json())
            .then(user => setUser(user))
    }, [])


    return (
        <div>
            <h1>{user.name}</h1>
            <h3>My Places</h3>
            <ul>
                {user.places.map(place => (
                    <li>
                        <h2>{place.name}</h2>
                        <img src={place.image} alt="Render error" />
                        <p>{place.category}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UserPage