
import { Link } from 'react-router-dom'


function Navigation() {
    return (
        <div style={{display: "flex", justifyContent: "space-between" } }>
            <Link class='nav-link' to='/'>Backlog</Link>
            <Link class='nav-link' to='/login'>Login</Link>
            <Link class='nav-link' to='/register'>Register</Link>
        </div>
    )
}

export default Navigation