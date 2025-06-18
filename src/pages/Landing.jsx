import React from 'react'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/projectCard'

function Landing() {
    return (
        <>
            <div className="container-fluid">
                <div className="row w-100" style={{ minHeight: '70vh' }}>
                    <div className="col-sm-12 col-md-6 d-flex justify-content-center flex-column">
                        <h1 className='text-success'>ProjectFare</h1>
                        <p style={{ textAlign: 'justify' }}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque sequi amet corrupti dicta enim quod recusandae
                            facere, excepturi neque optio tempore omnis dignissimos harum. Reiciendis consequatur qui culpa libero quae.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, soluta fugit non omnis excepturi esse possimus
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt perferendis necessitatibus hic accusantium
                            est quam adipisci nulla eligendi, labore culpa asperiores nisi repellendus quae harum sunt eum inventore aliquam deleniti.

                        </p>
                        <div className='d-grid'>
                            <Link className='btn btn-success' to={'/auth'}>Explore Now...</Link>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 p-5">
                        <img src="https://i.pinimg.com/736x/b6/14/28/b614286ef52de836895c9855796e3e84.jpg" className='w-75 h-75' alt="" />
                    </div>
                </div>
                <div className='w-100 my-5'>
                    <h3 className='text-center text-success'>Projects you May like...  </h3>
                    <div className="d-flex justify-content-around my-5">
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </div>
                    <div className='text-center'>
                        <Link to={'/allproject'}>View More...</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing
