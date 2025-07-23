import React, { useState,useContext } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { logUserApi, regUserApi } from '../services/allApis';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../ContextApi/Context';

function Auth() {
  const [authState, setAuthState] = useState(false)
  const [userData,setUserData]=useState({
    email:"",username:"",password:""
  })

  const nav=useNavigate()

  const {setAuthStatus}=useContext(authContext)

  const handleRegister= async()=>{
    console.log(userData)
    const {username,email,password}=userData
    if(!username || !email || !password){
      toast.warning("Enter Valid Inputs")
    }
    else{
      const response= await regUserApi(userData)
      console.log(response)
      if(response.status===201){
        toast.success("Registration Completed")
        handleAuthState()
        setUserData({
          email:"",username:"",password:""
        })
      }
      else{
        toast.error("Something Went Wrong")
      }
    }
  }

  const handleLogin = async ()=>{
    const {email,password}=userData
    if(!email || !password){
      toast.warning("Enter Valid Inputs!!")
    }
    else{
      const response = await logUserApi(userData)
      console.log(response)
      if(response.status===200){
        toast.success("Login Successfull!!")
        sessionStorage.setItem("token",response.data.token)
        sessionStorage.setItem("userData",JSON.stringify({username:response.data.user,github:response.data.github,linkedin:response.data.linkedin,profile:response.data.profile}))
        setAuthStatus(true) 
        nav('/')
      }
      else{
        toast.error("Something Went Wrong!!")
      }
      
    }
  }

  const handleAuthState = ()=>{
    setAuthState(!authState)
  }
  return (
    <>
      <div className="container-fluid d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="p-3 border border-3 border-success w-75">
          <div className="row">
            <div className="col">
              <img src="https://static.vecteezy.com/system/resources/previews/014/550/469/non_2x/authentication-by-entering-a-password-to-access-information-png.png" alt=""
                className='w-75 my-5' />
            </div>
            <div className="col">
              <h1>
              {
                authState?
                <>Register</>
                :
                <> Login</>
              }
              </h1>
              <div className='my-3'>
                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                  <Form.Control type="email" onChange={(e)=>{setUserData({...userData,email:e.target.value})}} placeholder="name@example.com" value={userData.email} />
                </FloatingLabel>
                {
                  authState&&
                   <FloatingLabel controlId="floatingInp" label="Username" className="mb-3">
                  <Form.Control type="text" onChange={(e)=>{setUserData({...userData,username:e.target.value})}} placeholder="username" value={userData.username} />
                </FloatingLabel>
                }
                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control type="password" onChange={(e)=>{setUserData({...userData,password:e.target.value})}} placeholder="Password" value={userData.password} />
                </FloatingLabel>
              </div>
              <div className='d-flex justify-content-between mt-5'>
                {
                  authState?
                  <button className='btn  btn-success' onClick={handleRegister}>Register</button>
                  :
                  <button className='btn btn-success' onClick={handleLogin}>Login</button>
                }

                <button className='btn btn-link'onClick={handleAuthState}>
                  {
                    authState?
                    <>Already a User?</>
                    :
                    <>New User?</>
                  }
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Auth
