// import { Link } from "react-router-dom"
import { nanoid } from 'nanoid'
import { useLocale } from '../../context/Locale/LocaleProvider'
import Tag from "../Tag/Tag"
import './Card.scss'

interface ProjectProps { 
	id: number
	name: string
	image: string
    i18nDescriptionKey: string
    deployLink: string
    repo: string
    tags: string[]
}

const Card = ({ project }: {project: ProjectProps} ) => {
    const { state } = useLocale()
    const { strings } = state

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault()
        const el = e.target as HTMLButtonElement
        if (el.id === 'visit') {
            window.location.href = project.deployLink
        } else if (el.id === 'repo') {
            window.location.href = project.repo
        }
    }

    const tags = project.tags.map(tag => <Tag tag={tag} key={nanoid()}/>)
    const description = strings[project.i18nDescriptionKey as keyof typeof strings]
    
    return (
        // <Link to={`/work/${project.id}`} className='nav'>
            <div className='card'>
                <img src={project.image} alt={`demo of ${project.name}`}/>
                <h3>{project.name}</h3>
                <div className='tags'>{tags}</div>
                <p>{description}</p>
                <div className='project-buttons'>
                    <div id='visit' onClick={handleClick}>{strings.visit}</div>
                    <div id='repo' onClick={handleClick}>{strings.repo}</div>
                </div>
            </div>
        // </Link>
    )
}

export default Card
