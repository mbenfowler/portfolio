import { Link } from 'react-router-dom'
import './Nav.scss'

const Nav = () => {
    return (
        <nav>
            <Link to='/' className='nav'><h1>mben</h1></Link>
            <div>
                <Link to='https://github.com/mbenfowler'>
                    <img src={`${process.env.PUBLIC_URL}/images/github.png`} alt='github'/>
                </Link>
                <Link to='https://www.linkedin.com/in/mbenfowler/'>
                    <img src={`${process.env.PUBLIC_URL}/images/linkedin.png`} alt='linkedin'/>
                </Link>
            </div>
        </nav>
    )
}

export default Nav
