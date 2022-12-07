import PlaceCard from './PlaceCard'

function PlaceContainer({ places }) {
    const placeCard = places.map(place => {
        return (
            <PlaceCard
                key={place.id}
                place={place}
            />
        )
    })

    return (
        <div>
            {placeCard}
        </div>
    )
}

export default PlaceContainer