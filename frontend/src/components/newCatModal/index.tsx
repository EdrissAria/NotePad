import Modal from "react-bootstrap/Modal"
import './style.css'

type paramType = {
    show: boolean,
    handleClose: ()=> void, 
}
function NewCatModal({show, handleClose}: paramType) {
  return (
    <Modal 
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
    >
        <Modal.Header className="border-0">
            <Modal.Title>New note catagory</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="d-flex align-items-center">
            <i className="fas fa-envelope m-2 fs-4"></i>
            <input type="text" className="new-input" placeholder="Name"/>
            </div>
            <div className="d-flex justify-content-around mt-4">
            <button className="new-btn" onClick={handleClose}>cancel</button>
            <button className="new-btn">add</button>            
            </div>
        </Modal.Body>
    </Modal>
  )
}

export default NewCatModal