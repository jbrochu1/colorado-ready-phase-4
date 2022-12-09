// import CommentForm from "./CommentForm"
import { Link } from 'react-router-dom'
// import ContentList from "./ContentList"
// import PlaceMap from './PlaceMap'

function PlaceCard({ place, updateUser, currentUser }) {
    const { id, name, address, category, image, hours, elevation, kid_friendly } = place

    return (
        <div>
            <div className='p-10'>
                <p className='text-2xl'>{name}</p>
                <img src={image} alt="Rendering Error" className='mx-auto drop-shadow-white-4xl rounded-3xl'/>
                <p>Category: {category}</p>
                <p>Address: {address}</p>
                <p>Operating Hours: {hours}</p>
                <p>Elevation: {elevation}</p>
                {/* <PlaceMap /> */}
                {kid_friendly ? <p>Kids ok!</p> : <p>Adults only</p>}
                <Link to={`/places/${id}`}><button> See More Details!</button></Link>
            </div>
            {/* <div>
                <div>
                    {place.contents.map(content => {
                    return(
                        <div key={content.id}>
                                <p>{content.comment}</p>
                                <p>{content.rating}</p>
                        </div>
                    )
                    })}
                    <ContentList place={place}/>
                </div>
                <div>
                    <CommentForm place={place} updateUser={updateUser} currentUser={currentUser} />
                </div>
            </div> */}
        </div>
    )
}

export default PlaceCard