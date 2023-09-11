import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom'
import './AboutMe.scss'

const AboutMe = () => {
    const FIREFLY_COUNT = 500;
    let fireflies = [];
    for (let i = 0; i < FIREFLY_COUNT; i++) {
        fireflies.push(<div className='firefly' key={nanoid()}></div>)
    }

    return (
        <section className='about-me'>
            {fireflies}
            <div className='stage'>
                <img src={process.env.PUBLIC_URL + '/images/explorermben.png'} alt='me'/>
                <figure className="ball bubble"></figure>
            </div>
            <h2>Hi I'm Matt and I'm a software engineer.</h2>
            <p>I have a specialty in front end development, quality, and localization.</p>
            <div>
                <Link to='/resume'><p id='resumeButton' className='hover'>Résumé</p></Link>
            </div>
        </section>
    )
}

export default AboutMe
