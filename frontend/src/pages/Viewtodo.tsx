import React from 'react'

function Viewtodo() {
  return (
    <main>
      <div className="container pt-4">
        <div className=" d-flex justify-content-between align-items-center">
          <div className='d-flex justify-content-start align-items-center'>
            <i className="fas fa-envelope fs-4 m-2"></i>
            <select name="" id="" className='form-select form-select-sm border-0'>
              <option selected>No catagory</option>
              <option value="work">work</option>
              <option value="personal">personal</option>
              <option value="life">life</option>
              <option value="home">home</option>
            </select>
          </div>
        </div>
        <div className='view-todo border-rounded-3 shadow-sm p-2 pb-5 mt-3 bg-white'>
          <div className='d-flex justify-content-start align-items-center border-bottom mt-2'>
            <input type="checkbox" className='form-check-input m-3 fs-4 rounded-4' />
            <div className='text-decoration-none d-flex align-items-center w-100'>
              <input type="text" value="something" className='w-100 border-0 px-2 py-2' style={{ outline: 'none' }} />
            </div>
          </div>
          <div className='d-flex justify-content-start align-items-center border-bottom mt-2'>
            <i className='fas fa-bell m-3 fs-4'></i>
            <div className='text-decoration-none d-flex align-items-center w-100'>
              <input type="datetime-local" value="something" className='w-100 border-0 px-2 py-2 form-control' />
            </div>
          </div>
          <div className='d-flex justify-content-start align-items-center border-bottom mt-2'>
            <i className='fas fa-exclamation m-3 fs-4'></i>
            <div className='text-decoration-none d-flex align-items-center w-100'>
              <span>Mark as important</span>
            </div>
            <div className='form-check form-switch'>
              <input type="checkbox" className='form-check-input m-3 fs-4' />
            </div>
          </div>
          <div className='d-flex justify-content-start align-items-center border-bottom mt-2'>
            <i className='fa-solid fa-chart-bar m-3 fs-4'></i>
            <div className='text-decoration-none d-flex align-items-center w-100'>
              <input type="text" placeholder='Remarks' className='w-100 border-0 px-2 py-2' style={{ outline: 'none' }} />
            </div>
          </div>
          <button className='btn mt-3 btn-success rounded-3 px-4 py-2 shadow-sm'>Save</button>
        </div>
      </div>
    </main>
  )
}

export default Viewtodo