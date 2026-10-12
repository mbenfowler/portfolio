import { nanoid } from 'nanoid'
import { useLocale } from '../../context/Locale/LocaleProvider'
import Tag from "../Tag/Tag"
import './Card.scss'

interface ProjectProps {
	id: number
	name: string
	image: string
    i18nDescriptionKey: string
    deployLink?: string
    repo: string
    tags: string[]
}

const Card = ({ project }: {project: ProjectProps} ) => {
    const { state } = useLocale()
    const { strings } = state

    const tags = project.tags.map(tag => <Tag tag={tag} key={nanoid()}/>)
    const description = strings[project.i18nDescriptionKey as keyof typeof strings]

    return (
        <div className='card'>
            <img src={project.image} alt={`demo of ${project.name}`}/>
            <h3>{project.name}</h3>
            <div className='tags'>{tags}</div>
            <p>{description}</p>
            <div className='project-buttons'>
                {project.deployLink &&
                    <a href={project.deployLink} target='_blank' rel='noopener noreferrer'>{strings.visit}</a>}
                <a href={project.repo} target='_blank' rel='noopener noreferrer'>{strings.repo}</a>
            </div>
        </div>
    )
}

export default Card
