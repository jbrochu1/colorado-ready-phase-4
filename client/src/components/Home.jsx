import PlaceContainer from './PlaceContainer'

function Home({ places, fetchUser }) {
    return (
        <PlaceContainer places={places} fetchUser={fetchUser}/>
    )
}

export default Home