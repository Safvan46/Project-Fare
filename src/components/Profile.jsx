import React, { useState,useEffect } from 'react'
import { toast } from 'react-toastify'
import base_url from '../services/base_url'
import { updateProfileApi } from '../services/allApis'
import { useNavigate } from 'react-router-dom'
import { authContext } from '../ContextApi/Context'
import { useContext } from 'react'
function Profile() {
    const [profileShow, setProfileShow] = useState()
    const [profileData,setProfileData]=useState({
        username:"",github:"",linkedin:"",profile:""
    })

    const [preview,setPreview]=useState("")
    const nav=useNavigate()
    const {setAuthStatus}=useContext(authContext)

    useEffect(()=>{
        if(sessionStorage.getItem('userData')){
            const userData=JSON.parse(sessionStorage.getItem("userData"))
            setProfileData({...userData})
        }
    },[])

    useEffect(()=>{
        if(profileData.profile.type){
            setPreview(URL.createObjectURL(profileData.profile))
        }
        else{
            setPreview("")
        }
    },[profileData.profile.type])

    const handleEdit= async()=>{
        console.log(profileData)
        const {username,github,linkedin,profile}=profileData
        if(!username || !github || !linkedin || !profile){
            toast.warning("Enter Valid Inputs!!")
        }
        else{
            let header = {}
            if(profile.type){
                header={
                    authorization:`Token ${sessionStorage.getItem('token')}`,
                    "Content-Type":"multipart/form-data",
                };
            }else{
                header ={
                    authorization: `Token ${sessionStorage.getItem('token')}`,
                    "Content-type":"application/json",
                };
            }
            const response=await updateProfileApi(profileData,header)
            if(response.status===200){
                toast.success("Profile Updated")
                nav('/')
                sessionStorage.clear()
                setAuthStatus(false)
            }
            else{
                toast.error("Updation Failed")
                console.log(response)
            }
        }
    }

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
                                <i className="fa-solid fa-toggle-on fa-xl text-success"></i>
                                :
                                <i className="fa-solid fa-toggle-off fa-xl text-secondary"></i>
                        }

                    </button>
                </div>
                {
                    profileShow&&
                    <div className='w-100'>
                    <div>
                        <label htmlFor="pf" className='d-flex justify-content-center'>
                            <input type="file" name="" id="pf" style={{ display: 'none' }} onChange={(e)=>setProfileData({...profileData,profile:e.target.files[0]})} />
                            <img src={preview?preview:(profileData.profile?`${base_url}/projectimg/${profileData.profile}`:"https://cdn-icons-png.flaticon.com/512/8608/8608769.png")} alt="profile" className='w-75' />
                        </label>
                        <input type="text" placeholder='username' name="" id="" defaultValue={profileData.username} className='form-control mb-3'onChange={(e)=>setProfileData({...profileData,username:e.target.value})} />
                        <input type="text" placeholder='Git Link' name="" id="" defaultValue={profileData.github} className='form-control mb-3' onChange={(e)=>setProfileData({...profileData,github:e.target.value})} />
                        <input type="text" placeholder='Linkedin URL ' name="" id="" defaultValue={profileData.linkedin} className='form-control mb-3'onChange={(e)=>setProfileData({...profileData,linkedin:e.target.value})} />
                    </div>
                    <div className='d-flex justify-content-between'>
                        <button className='btn btn-secondary'>Cancel/Close</button>
                        <button className='btn btn-success' onClick={handleEdit}>Update</button>
                    </div>
                </div>
                }
                
            </div>
        </>
    )
}

export default Profile
