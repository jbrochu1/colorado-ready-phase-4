function PlaceCard({ place }) {
    const {name, address, category, image, hours, elevation, kid_friendly} = place

    return(
        <div>
            <h3>{name}</h3>
            <img src={image} alt="Rendering Error"/>
            <p>{category}</p>
            <p>{address}</p>
            <p>{hours}</p>
            <p>{elevation}</p>
            {kid_friendly ? <p>Kids ok!</p> : <p>Adults only</p>}
            <ul>
            {place.contents.map(content => {
                return(
                        <li key={content.id}>
                            <p>"{content.comment}" - {content.user_id}</p>
                            <p>{content.rating} / 5 STARS</p>
                        </li>
                )
            })}
            </ul>
        </div>
    )
}

export default PlaceCard
// c1 = Content.first
// c1.user.username
//=> "miranda"

//Make Content Cards and Content Container its own thing within Place Cards