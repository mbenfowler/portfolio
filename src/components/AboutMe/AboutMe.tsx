import { Link } from 'react-router-dom'
import './AboutMe.scss'

const AboutMe = () => {
    return (
        <section className='about-me'>
            <img src={process.env.PUBLIC_URL + '/images/explorermben.png'} alt='me'/>
            <h2>Hi I'm Matt and I'm a software engineer.</h2>
            <p>I have a specialty in front end development, quality, and localization.</p>
            <div>
                <Link to='/resume'><button>Resume</button></Link>
                <button></button>
            </div>
        </section>
    )
}

export default AboutMe
