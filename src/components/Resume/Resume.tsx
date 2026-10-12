import { nanoid } from 'nanoid'
import { useLocale } from '../../context/Locale/LocaleProvider'
import { SKILLS, EXPERIENCE, EDUCATION } from "./resumeData"
import './Resume.scss'

const Resume = () => {
    const { state } = useLocale()
    const { strings } = state

    const resumeSkills = SKILLS.map(group => {
        return (
            <div className='skill-group' key={nanoid()}>
                <p className='skill-label'>{group.group}</p>
                <div className='skill-list'>
                    {group.items.map(skill => <span className='skill' key={nanoid()}>{skill}</span>)}
                </div>
            </div>
        )
    })

    const resumeExperience = EXPERIENCE.map(job => {
        const tenure = job.current ? `${job.tenure} - ${strings.present}` : job.tenure
        return (
            <div className='job' key={nanoid()}>
                <h3>{job.title}</h3>
                <h4>{job.company}</h4>
                <p>{tenure}</p>
            </div>
        )
    })

    const education = EDUCATION.map(school => {
        return (
            <div className='school' key={nanoid()}>
                <h3>{school.name}</h3>
                <h4>{school.program}</h4>
                <p>{school.datesAttended}</p>
            </div>
        )
    })
    
    return (
        <article id='resume'>
            <h1 id='title'>{strings.resume}</h1>
            <p id='headline'>{strings.headline}</p>
            <h2 className='header'>{strings.skills_and_tools}</h2>
            <section id='skills'>{resumeSkills}</section>
            <h2 className='header'>{strings.work_experience}</h2>
            <section id='experience'>{resumeExperience}</section>
            <h2 className='header'>{strings.education}</h2>
            <section id='education'>{education}</section>
        </article>
    )
}

export default Resume
