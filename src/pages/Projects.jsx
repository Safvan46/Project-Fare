import React from 'react'
import Header from '../components/Header'
import ProjectCard from '../components/projectCard'
function Projects() {
  return (
   <>
   <Header/>
   <div className="container-fluid" style={{minHeight:'70vh'}}>
    <div className='d-flex justify-content-between my-5'>
      <h1 className='text-success'>All Projects</h1>
      <input type="search" placeholder='Search with language' className='form-control w-25 ' />
    </div>
    <div className='d-flex flex-wrap justify-content-around'>
      <ProjectCard/>
    </div>
   </div>
   </>
  )
}

export default Projects
