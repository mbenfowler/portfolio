import './Tag.scss'

type TagName = {
    tag: string
}

const Tag = ( { tag }: TagName ) => {
    return (
        <div className='tag'>
            <p>{tag}</p>
        </div>
    )
}

export default Tag