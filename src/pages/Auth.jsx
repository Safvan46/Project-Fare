import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Auth() {
  const [authState, setAuthState] = useState(false)

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
                  <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                {
                  authState&&
                   <FloatingLabel controlId="floatingInp" label="Username" className="mb-3">
                  <Form.Control type="text" placeholder="username" />
                </FloatingLabel>
                }
                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>
              </div>
              <div className='d-flex justify-content-between mt-5'>
                {
                  authState?
                  <button className='btn  btn-success'>Register</button>
                  :
                  <button className='btn btn-success'>Login</button>
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
