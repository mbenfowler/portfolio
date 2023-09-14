import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Nav.scss'

type NavType = {
    handleRegionChange: Function
    isDark: boolean
    setIsDark: Function
}

const Nav = ({ handleRegionChange, isDark, setIsDark }: NavType) => {
    const [selectValue, setSelectValue] = useState<string>('EN')

    const handleFormChange = (e: React.FormEvent<HTMLSelectElement>) => {
        const target = e.target as HTMLSelectElement
        setSelectValue(target.value)
        handleRegionChange(target.value)
    }

    return (
        <nav>
            <Link to='/' className='nav'><h1>mben</h1></Link>
            <div id='rightSideNav'>
                <div className='custom-select'>
                    <select onChange={handleFormChange} name="language-picker-select" defaultValue={selectValue}>
                        <option lang='en' value='EN'>English</option>
                        <option lang='fr' value='HR'>Hrvatski</option>
                    </select>
                    <div className="custom-select-value">
                        <span className="material-symbols-outlined">language</span>
                        <span id='selectedLocale'>{selectValue}</span>
                    </div>
                </div>
                <Link to='https://github.com/mbenfowler'>
                    <img src={`${process.env.PUBLIC_URL}/images/github.png`} alt='github'/>
                </Link>
                <Link to='https://www.linkedin.com/in/mbenfowler/'>
                    <img src={`${process.env.PUBLIC_URL}/images/linkedin.png`} alt='linkedin'/>
                </Link>
            </div>
        </nav>
    )
}

export default Nav
