import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from '../Nav/Nav'
import Home from '../Home/Home'
import Resume from '../Resume/Resume'
import Project from '../Project/Project'
import EmptyState from '../EmptyState/EmptyState'
import { useLocale } from '../../context/Locale/LocaleProvider'
import './App.scss'

function App() {
  const { dispatch } = useLocale();

  const handleRegionChange = (region: string) => {
    const action = {
      type: "CHANGE_LOCALE",
      payload: {
        region
      }
    };

    dispatch(action);
  };

  const [isDark, setIsDark] = useState(true)

  return (
    <div data-theme={isDark ? 'dark' : 'light'}>
      <Nav handleRegionChange={handleRegionChange} isDark={isDark} setIsDark={setIsDark}/>
      <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/work/:id' element={<Project />} />
          <Route path="*" element={<EmptyState />} />
      </Routes>
    </div>
  );
}

export default App;
