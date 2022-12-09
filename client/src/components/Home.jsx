import PlaceContainer from './PlaceContainer'

function Home({ places, updateUser, currentUser }) {
    return (
        <div>
        <div className='text-6xl p-5 font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Colorado Ready!</div>
        <PlaceContainer places={places} updateUser={updateUser} currentUser={currentUser} />
        </div>
    )
}

export default Home