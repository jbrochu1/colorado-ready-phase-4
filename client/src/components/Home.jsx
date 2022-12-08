import PlaceContainer from './PlaceContainer'

function Home({ places, updateUser, currentUser }) {
    return (
        <PlaceContainer places={places} updateUser={updateUser} currentUser={currentUser}/>
    )
}

export default Home