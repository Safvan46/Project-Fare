import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import ProjectCard from '../components/projectCard'
import { allProjectsApi } from '../services/allApis'
function Projects() {
  const [projectList,setProjectList]=useState([])
  const [datalist,setDataList]=useState([])

  useEffect(()=>{
    if(sessionStorage.getItem('token')){
      getData()
    }
  },[])

  const getData=async()=>{
    const response = await allProjectsApi()
    console.log(response)
    if(response.status==200){
      setProjectList(response.data)
      setDataList(response.data)
    }
  }

  const handleSearch=(val)=>{
    const data=datalist.filter(item=>item.languages.toLowerCase().includes(val.toLowerCase()))
    setProjectList(data)
  }

  return (
   <>
   <Header/>
   <div className="container-fluid" style={{minHeight:'70vh'}}>
    <div className='d-flex justify-content-between my-5'>
      <h1 className='text-success'>All Projects</h1>
      <input type="search" onChange={(e)=>{handleSearch(e.target.value)}} placeholder='Search with language' className='form-control w-25 ' />
    </div>
    <div className='d-flex flex-wrap justify-content-around'>
      {
        projectList.length > 0?
        <>
        {projectList.map(item=>(
          <ProjectCard project={item}/>
        ))}
        </>
        :
        <h2>Not Founded</h2>
      }
      
    </div>
   </div>
   </>
  )
}

export default Projects
