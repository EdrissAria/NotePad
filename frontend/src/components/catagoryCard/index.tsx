import React from 'react'

function CatagoryCard() {
  return (
    <div className="d-flex justify-content-between align-items-center my-3 p-3 shadow-sm bg-white rounded">
        <div className="d-flex align-items-center">
          <i className="fas fa-envelope p-2 fs-4"></i>
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