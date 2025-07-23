import React, { useState, useEffect,useContext } from 'react'
import AddProject from '../components/AddProject'
import Profile from '../components/Profile'
import { userProjectApi,deleteProjectApi } from '../services/allApis'
import { toast } from 'react-toastify'
import Edit from '../components/Edit'
import { addResponseContext,editResponseContext } from '../ContextApi/Context'


function Dashboard() {

  const [user, setUser] = useState("")
  const [projects, setProjects] = useState([])
  const {addResponse}=useContext(addResponseContext)
   const {editResponse}=useContext(editResponseContext)

  useEffect(() => {
    if (sessionStorage.getItem("userData")) {
      setUser(JSON.parse(sessionStorage.getItem("userData")))
      getData()
    }
  }, [addResponse,editResponse])

  const getData = async () => {
    const response = await userProjectApi()
    console.log(response)
    if (response.status === 200) {
      setProjects(response.data)
    }
  }

  const handleDelete=async(id)=>{
    const response = await deleteProjectApi(id)
    if(response.status===200){
      getData()
    }
    else{
      toast.error("Something Went Wrong")
      console.log(response)
    }
  }

  return (
    <>
      <div className='container-fluid' style={{ minHeight: '70vh' }}>
        <h2>Dashboard</h2>
        <h3> Welcome to ProjectFare <span className='text-warning'>{user?.username}</span></h3>
        <div className='row'>
          <div className="col-9">
            <AddProject />
            <div className='w-100 border border-3 border-light p-3 mt-4 '>
              {
                projects.length > 0 ?
                  <>
                    {
                      projects.map(item => (
                        <div className='m-3 border border-2 border-success d-flex justify-content-between p-2'>
                          <h5>{item.title}</h5>
                          <div>
                            <a href={item.gitrepo} target='_blank' className='me-3'>
                              <i className="fa-brands fa-github fa-xl text-secondary"></i>
                            </a>
                            <Edit project={item}/>
                            <button className="btn me-3" onClick={()=>{handleDelete(item._id)}}>
                              <i className="fa-solid fa-trash fa-xl text-danger"></i>
                            </button>
                          </div>
                        </div>
                      ))
                    }

                  </>
                  :
                  <h3 className='text-center text-danger'>No Projects Added Yet !!</h3>
              }

            </div>
          </div>
          <div className="col-3">
            <Profile />
          </div>

        </div>

      </div>
    </>
  )
}

export default Dashboard
