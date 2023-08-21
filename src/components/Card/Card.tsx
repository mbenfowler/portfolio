import { Link } from "react-router-dom"
import './Card.scss'

interface ProjectProps { 
	id: number
	name: string
	image: string
    description: string
    deployLink: string
    repo: string
}

const Card = ({ project }: {project: ProjectProps} ) => {
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault()
        const el = e.target as HTMLButtonElement
        if (el.id === 'visit') {
            window.location.href = project.deployLink
        } else if (el.id === 'repo') {
            window.location.href = project.repo
        }
    }
    
    return (
        <Link to={`/work/${project.id}`} className='nav'>
            <div className='card'>
                <img src={project.image} alt={`demo of ${project.name}`}/>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className='project-buttons'>
                    <button id='visit' onClick={handleClick}>Visit!</button>
                    <button id='repo' onClick={handleClick}>Repo</button>
                </div>
            </div>
        </Link>
    )
}

export default Card
