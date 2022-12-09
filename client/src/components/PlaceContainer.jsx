import PlaceCard from './PlaceCard'

function PlaceContainer({ places, updateUser, currentUser }) {
    const placeCard = places.map(place => {
        return (
            <PlaceCard
                key={place.id}
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