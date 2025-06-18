import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className="container-fluid bg-success">
                <div className="row">
                    <div className="col">
                        <h2>ProjectFare</h2>
                        <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque autem blanditiis aspernatur explicabo beatae totam in accusantium
                            molestiae quaerat asperiores, delectus tempore, nobis eum, odit maxime deleniti perferendis ratione quae.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero voluptates quibusdam exercitationem.
                            Eligendi accusamus tenetur commodi voluptatem provident a facere error atque, id, dolor inventore minus, molestias dicta modi porro?</p>
                    </div>
                    <div className="col-2">
                        <h1 className='text-center'>Links</h1>
                        <div className="d-flex justify-content-around flex-column align-items-center">
                            <Link className='text-light' to={'/'}>Landing</Link>
                            <Link className='text-light' to={'/auth'}>Login</Link>
                        </div>
                    </div>
                    <div className="col">
                        <h2>Feedbacks</h2>
                        <textarea name="" placeholder='Enter your valuable feedback' className='form-control my-3' id=""></textarea>
                        <button className='btn btn-secondary'>Send</button>
                    </div>
                </div>
                <h6 className='text-center'>Projectfare 2025 &copy; copyrights reserved</h6>
            </div>
        </>
    )
}

export default Footer
