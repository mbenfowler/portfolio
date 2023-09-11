import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { nanoid } from 'nanoid'
import Card from '../Card/Card'
import './Works.scss'
import { WORKS_DATA } from './worksData'

const Works = () => {
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };

    const works = WORKS_DATA.map(project => {
        return (
            <Card project={project} key={nanoid()}/>
        )
    })
    
    return (
        <section className='works'>
            <h2>Works</h2>
            <AliceCarousel
                mouseTracking
                autoPlay
                autoPlayStrategy="none"
                autoPlayInterval={2000}
                animationDuration={1500}
                animationType="fadeout"
                infinite
                disableDotsControls
                disableButtonsControls
                items={works}
                paddingLeft={50}
                paddingRight={50}
                responsive={responsive}
            />
        </section>
    )
}

export default Works
