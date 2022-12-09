import PlaceContainer from './PlaceContainer'

function Home({ places, updateUser, currentUser }) {
    return (
        <div>
        <div className='text-6xl p-5'>Colorado Ready!</div>
        <PlaceContainer places={places} updateUser={updateUser} currentUser={currentUser} />
        </div>
    )
}

export default Home