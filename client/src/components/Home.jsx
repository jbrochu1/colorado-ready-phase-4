import PlaceContainer from './PlaceContainer'

function Home({ places, updateUser, currentUser }) {
    return (
        <div>
            <div className="flex items-center">
                <div className='w-1/4 float-right'>
                    <img src="https://www.pngmart.com/files/22/Colorado-Flag-PNG-Photos.png" /> 
                </div>
                <div className='w-3/4 float-left font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>olorado Ready!</div>
                {/* <div className='w-1/4'></div> */}
            </div>        
            <div>
                <PlaceContainer places={places} updateUser={updateUser} currentUser={currentUser} />
            </div>
        </div>
    )
}

export default Home