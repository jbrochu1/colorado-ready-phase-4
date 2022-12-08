import PlaceCard from './PlaceCard'

function PlaceContainer({ places, updateUser, currentUser }) {
    const placeCard = places.map(place => {
        return (
            <PlaceCard
                key={place.name}
                place={place}
                updateUser={updateUser}
                currentUser={currentUser}
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