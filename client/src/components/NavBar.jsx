import { Link } from 'react-router-dom'

function NavBar({ updateUser, currentUser }) {

    const handleLogOut = () => {
        fetch('/api/logout', {
            method: 'DELETE'
        })
        .then(res => {
            if(res.ok){
                updateUser(false)
            }
        })
    }

    return(
        <nav>
            <button><Link to='/'>Home</Link></button>
            {currentUser ? <button><Link to='/place/new'>Add Place</Link></button> : null}
            {currentUser ? <button onClick={handleLogOut}>Log Out</button> : <button><Link to='/login'>Log In</Link></button>}
            {currentUser ? (<button>Edit Profile</button>) : (<button><Link to='/sign_up'>Sign Up</Link></button>)}
        </nav>
    )
}

export default NavBar