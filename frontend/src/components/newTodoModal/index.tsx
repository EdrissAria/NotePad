import Modal from 'react-bootstrap/Modal'
import './style.css'

type paramType = {
  handleClose: () => void,
  show: boolean
}
function NewTodoModal({ show, handleClose }: paramType) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header className="border-0">
        <Modal.Title>New todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-column">
          <input type="text" className="new-input" placeholder="To-do" />
          <div className='mt-2'>
            <label className="d-flex align-items-center">
              <i className='fas fa-bell m-2 fs-4'></i>
              <input type="datetime-local" className='form-control' />
            </label>
            <label className='d-flex align-items-center mt-2'>
              <input type="checkbox" className="form-check-input m-2" />
              important
            </label>
          </div>
        </div>
        <div className="d-flex justify-content-around mt-4">
          <button className="new-btn" onClick={handleClose}>cancel</button>
          <button className="new-btn">save</button>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default NewTodoModal