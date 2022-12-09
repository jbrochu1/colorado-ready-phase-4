import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function UserPage() {
    const [user, setUser] = useState([])
    // const [errors, setErrors] = useState([])

    const params = useParams
    const { id } = params

    useEffect(() => {
        fetch(`/api/users/${id}`)
            .then(res => {
                // if (res.ok) {
                res.json().then(user => {
                    setUser(user)
                    console.log(user)
                })
                // } else {
                //     res.json().then(data => setErrors(data.errors))
                // }
            })

    }, [])

    // if (errors) return <h1>{errors}</h1>

    const { first_name, last_name, email, location, age, username, avatar_img, contents } = user

    return (
        <>
            <h1>{username}'s Profile</h1>
            <img src={avatar_img} width="250" alt="No Image Uploaded" />
            <ul>
                <li>First Name: {first_name}</li>
                <li>Last Name: {last_name}</li>
                <li>Email: {email}</li>
                <li>Age: {age}</li>
                <li>Location: {location}</li>
                <br/>
                {/* <h2>{username}'s Content</h2>
                {contents.map(content => {
                    return (
                        <li>
                            <h2>{content.place.name}</h2>
                            <p>"{content.comment}" - {content.rating} / 5</p>
                        </li>
                    )
                })} */}
            </ul>
        </>
    )
}

export default UserPage

// {currentUser ? (
//     <div>
//         <h1>{username}</h1>
//         <img src={avatar_img} width="300" alt="No Image Uploaded (ಠ_ಠ)" />
//         <p>{first_name} {last_name}, {location}</p>
//         <p>{email}</p>
//         <p>Age: {age}</p>

//         {/* <h3>My Places</h3>
//         <ul>
//             {places.map(place => {
//         <li>
//             <h2>{place.name}</h2>
//             <img src={place.image} alt="Render error" />
//             <p>{place.category}</p>
//         </li>
//     })}
//         </ul>
//         <h3>My Comments</h3>
//         {contents.map(content => {
//     <li>
//         <h2>{content.place.name}</h2>
//         <p>"{content.comment}" - {content.rating} / 5</p>
//     </li>
// })} */}
//     </div>
// ) : (<div>"Ain't nothin here!"</div>)}