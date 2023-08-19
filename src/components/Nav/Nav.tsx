import { Link } from 'react-router-dom'
import './Nav.scss'

const Nav = () => {
    return (
        <nav>
            <Link to='/' className='nav'><h1>mben</h1></Link>
        </nav>
    )
}

export default Nav
