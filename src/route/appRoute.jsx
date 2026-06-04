import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ProjectDetails from '../components/project/ProjectDetails'


const appRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:id" element={<ProjectDetails />}/>
    </Routes>
  )
}

export default appRoute
