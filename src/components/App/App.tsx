import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Nav from '../Nav/Nav'
import Home from '../Home/Home'
import Resume from '../Resume/Resume'
import Project from '../Project/Project'
import EmptyState from '../EmptyState/EmptyState'
import './App.css';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}></Route>
          <Route path='/resume' element={<Resume />}></Route>
          <Route path='/work/:id' element={<Project />}></Route>
          <Route path="*" element={<EmptyState />} />
      </Routes>
    </>
  );
}

export default App;
