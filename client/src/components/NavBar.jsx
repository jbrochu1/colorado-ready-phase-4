import { Link } from 'react-router-dom'

function NavBar({ updateUser, currentUser }) {

    const handleLogOut = () => {
        fetch('/api/logout', {
            method: 'DELETE'
        })
            .then(res => {
                if (res.ok) {
                    updateUser(false)
                }
            })
    }

    return (
        <nav className="navbar bg-base-100">
            <div className='navbar-start'>
            <button className="btn btn-ghost normal-case text-xl"><Link to='/'>Home</Link></button> 
            </div>
            <h1>Colorado Ready</h1>
            <div className='navbar-center'>
                {currentUser ? <button className="btn btn-ghost normal-case text-xl"><Link to='/place/new'>Add Place</Link></button> : null}
            </div>
            
                {currentUser ? (<button className="btn btn-ghost normal-case text-xl"><Link to='/profile'>View Profile</Link></button>) : (<button className="btn btn-ghost normal-case text-xl navbar-center"><Link to='/sign_up'>Sign Up</Link></button>)}
            
            
            {currentUser ? <button className="btn btn-ghost normal-case text-xl" onClick={handleLogOut}>Log Out</button> : <button className="btn btn-ghost normal-case text-xl"><Link to='/login'>Log In</Link></button>}
            
        </nav>
    )
}

export default NavBar