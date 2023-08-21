import Card from '../Card/Card'
import './Works.scss'
import { worksData } from './worksData'

const Works = () => {
    const works = worksData.map(project => {
        return (
            <Card project={project} key={`${project.id}`}/>
        )
    })
    
    return (
        <section className='works'>
            <h2>Works</h2>
            <p>lorem ipsum</p>
            {works}
        </section>
    )
}

export default Works
