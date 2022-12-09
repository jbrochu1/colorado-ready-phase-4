import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function UserPage() {
    const [user, setUser] = useState()
    // const [errors, setErrors] = useState([])

    const params = useParams
    const { user_id } = params

    useEffect(() => {
        fetch(`/users/${user_id}`)
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
            <h3>My Comments</h3>
                    {user.contents.map(content => {
                        <li>
                            <h2>{content.place.name}</h2>
                            <p>"{content.comment}" - {content.rating} / 5</p>
                        </li>
                    })}
        </div>
    )
}

export default UserPage