import React, { useState } from 'react'

function Profile() {
    const [profileShow, setProfileShow] = useState()

    const toggleShow = () => {
        setProfileShow(!profileShow)
    }
    return (
        <>
            <div className='container-fluid border border-2 border-success p-4 mb-3'>
                <div className='d-flex justify-content-between'>
                    <h3>Profile</h3>
                    <button className='btn' onClick={toggleShow}>
                        {
                            profileShow ?
                                <i class="fa-solid fa-toggle-on fa-xl text-success"></i>
                                :
                                <i class="fa-solid fa-toggle-off fa-xl text-secondary"></i>
                        }

                    </button>
                </div>
                {
                    profileShow&&
                    <div className='w-100'>
                    <div>
                        <label htmlFor="pf" className='d-flex justify-content-center'>
                            <input type="file" name="" id="pf" style={{ display: 'none' }} />
                            <img src="https://cdn-icons-png.flaticon.com/512/8608/8608769.png" alt="profile" className='w-75' />
                        </label>
                        <input type="text" placeholder='username' name="" id="" className='form-control mb-3' />
                        <input type="text" placeholder='Git Link' name="" id="" className='form-control mb-3' />
                        <input type="text" placeholder='Linkedin URL ' name="" id="" className='form-control mb-3' />
                    </div>
                    <div className='d-flex justify-content-between'>
                        <button className='btn btn-secondary'>Cancel</button>
                        <button className='btn btn-success'>Update</button>
                    </div>
                </div>
                }
                
            </div>
        </>
    )
}

export default Profile
