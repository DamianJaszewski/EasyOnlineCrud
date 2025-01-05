
import { Link } from 'react-router-dom'
function Home() {
    return (
        <div>
            <Link class='nav-link' to='/'>Backlog</Link>
            <Link class='nav-link' to='/login'>Login</Link>
            <Link class='nav-link' to='/register'>Register</Link>
        </div>
    )
}

export default Home