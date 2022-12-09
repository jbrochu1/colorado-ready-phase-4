import { useEffect } from 'react'
// import { useParams } from 'react-router-dom'


function UserPage({ currentUser }) {
    // const [user, setUser] = useState()
    // const [errors, setErrors] = useState([])
    const {
        first_name,
        last_name,
        email,
        location,
        age,
        username,
        avatar_img,
        places,
        contents
    } = currentUser

    // // const params = useParams
    // // const { user_id } = params

    useEffect(() => {
        console.log(currentUser)
        console.log(places)
        console.log(contents)
    }, [])


    return (
        <>
            {currentUser ? (
                <div>
                    <h1>{username}</h1>
                    <img src={avatar_img} width="300" alt="No Image Uploaded (ಠ_ಠ)" />
                    <p>{first_name} {last_name}, {location}</p>
                    <p>{email}</p>
                    <p>Age: {age}</p>

                    {/* <h3>My Places</h3>
                    <ul>
                        {places.map(place => {
                    <li>
                        <h2>{place.name}</h2>
                        <img src={place.image} alt="Render error" />
                        <p>{place.category}</p>
                    </li>
                })}
                    </ul>
                    <h3>My Comments</h3>
                    {contents.map(content => {
                <li>
                    <h2>{content.place.name}</h2>
                    <p>"{content.comment}" - {content.rating} / 5</p>
                </li>
            })} */}
                </div>
            ) : (<div>"Ain't nothin here!"</div>)}
        </>
    )
}

export default UserPage