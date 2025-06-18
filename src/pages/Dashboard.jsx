import React from 'react'
import AddProject from '../components/AddProject'
import Profile from '../components/profile'


function Dashboard() {
  return (
    <>
    <div className='container-fluid' style={{minHeight:'70vh'}}>
      <h2>Dashboard</h2>
      <div className='row'>
        <div className="col-9">
         <AddProject/>
         <div className='w-100 border border-3 border-light p-3 mt-4 '>
          <div className='m-3 border border-2 border-success d-flex justify-content-between p-2'>
            <h5>Project Title</h5>
            <div>
              <a href="" className='me-3'>
                <i className="fa-brands fa-github fa-xl text-secondary"></i>
              </a>
              <button className='btn me-3'>
                <i className="fa-solid fa-pen-to-square fa-xl text-warning"></i>
              </button>
              <button className="btn me-3">
                <i className="fa-solid fa-trash fa-xl text-danger"></i>
              </button>
            </div>
          </div>
         </div>
        </div>
        <div className="col-3">
          <Profile/>
        </div>

      </div>

    </div>
    </>
  )
}

export default Dashboard
