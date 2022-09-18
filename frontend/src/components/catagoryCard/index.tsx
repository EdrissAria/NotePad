import React from 'react'

function CatagoryCard() {
  return (
    <div className="catagory-card d-flex justify-content-between align-items-center my-3 p-3 shadow-sm bg-white rounded">
        <div className="d-flex align-items-end">
          <i className="fas fa-clipboard-check p-2 fs-3"></i>
          <input type="text" value="Personal" className="form-control" />
        </div>
        <div className="">
          <button className="btn btn-success m-2">Save</button>
          <button className="btn btn-danger">Delete</button> 
        </div>
    </div>
  )
}

export default CatagoryCard