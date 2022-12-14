import Modal from "react-bootstrap/Modal"
import './style.css'
import { useSelector } from 'react-redux'
import {useDarkMode} from '../../hooks/useDarkMode'

type propsType = {
    show: boolean,
    handleClose: () => void,
}

function NewCatModal({ show, handleClose }: propsType) {
    useSelector((state: any)=> state.theme.value)
    const getCookie = useDarkMode('dark')
    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            className={`${getCookie?'dark':'light'}`}
        >
            <Modal.Header className="modal-header border-0">
                <Modal.Title>New note catagory</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="modal-body d-flex align-items-end">
                    <i className="fas fa-clipboard me-2 fs-4"></i>
                    <input type="text" className="new-input" placeholder="Name" />
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