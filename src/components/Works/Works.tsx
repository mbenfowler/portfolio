import { nanoid } from 'nanoid'
import Card from '../Card/Card'
import './Works.scss'
import { WORKS_DATA } from './worksData'

const Works = () => {
    const works = WORKS_DATA.map(project => {
        return (
            <Card project={project} key={nanoid()}/>
        )
    })
    
    return (
        <section className='works'>
            <h2>Works</h2>
            <p>lorem ipsum</p>
            <div className='worksList'>
                {works}
            </div>
        </section>
    )
}

export default Works
