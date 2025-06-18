import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img onClick={handleShow} variant="top" src="https://w7.pngwing.com/pngs/501/438/png-transparent-man-using-laptop-illustration-web-development-web-developer-web-design-web-development-text-computer-presentation.png" />
        <Card.Body>
          <Card.Title>Blog App</Card.Title>
        </Card.Body>
      </Card>


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Project title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col">
              <img src="https://w7.pngwing.com/pngs/501/438/png-transparent-man-using-laptop-illustration-web-development-web-developer-web-design-web-development-text-computer-presentation.png" alt=""
                className='w-100' />
            </div>
            <div className="col">
              <h3>Project title</h3>
              <p style={{textAlign:'justify'}}>
                <span className='fw-bolder'>Description :</span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore vitae autem eum minus iure blanditiis 
                repellendus illum voluptates dolores magni, unde earum id, eveniet soluta cupiditate quaerat beatae ab
                molestias.
              </p>
              <p>
                <span className='fw-bolder'>Languages :</span>
                HTML,CSS,JS
              </p>
              <div className="d-flex justify-content-between">
                <a href="">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="">
                  <i class="fa-solid fa-link"></i>
                </a>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ProjectCard
