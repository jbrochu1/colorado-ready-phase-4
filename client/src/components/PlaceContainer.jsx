import PlaceCard from './PlaceCard'

function PlaceContainer({ places, fetchUser }) {
    const placeCard = places.map(place => {
        return (
            <PlaceCard
                key={place.name}
                place={place}
                fetchUser={fetchUser}
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