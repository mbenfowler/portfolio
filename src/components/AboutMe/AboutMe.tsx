import { nanoid } from 'nanoid'
import { Link } from 'react-router-dom'
import { useLocale } from '../../context/Locale/LocaleProvider'
import './AboutMe.scss'

const AboutMe = () => {
    const { state } = useLocale()
    const { strings } = state

    const FIREFLY_COUNT = 100
    let fireflies = []
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
            <h2>{strings.intro}</h2>
            <p>{strings.specialties}</p>
            <div>
                <Link to='/resume'><p id='resumeButton' className='hover'>{strings.resume}</p></Link>
            </div>
        </section>
    )
}

export default AboutMe
