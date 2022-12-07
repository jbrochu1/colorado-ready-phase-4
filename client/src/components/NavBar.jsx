import { Link } from 'react-router-dom'

function NavBar({ updateUser }) {

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
            <button onClick={handleLogOut}>Log Out</button>
            <button><Link to='/login'>Log In</Link></button>
            <button><Link to='/sign_up'>Sign Up</Link></button>
        </nav>
    )
}

export default NavBar