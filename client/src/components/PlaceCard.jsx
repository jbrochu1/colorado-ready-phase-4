function PlaceCard({ place }) {
    const {name, address, category, image, hours, elevation, kid_friendly} = place

    return(
        <div>
            <div>
                <h3>{name}</h3>
                <img src={image} alt="Rendering Error"/>
                <p>{category}</p>
                <p>{address}</p>
                <p>{hours}</p>
                <p>{elevation}</p>
                {kid_friendly ? <p>Kids ok!</p> : <p>Adults only</p>}
            </div>
            <div>
                <div>
                    {place.contents.map(content => {
                    return(
                        <div>
                                <p>{content.comment}</p>
                                <p>{content.rating}</p>
                        </div>
                    )
                    })}
                </div>
                <div>
                    <CommentForm />
                </div>
            </div>
        </div>
    )
}

export default PlaceCard