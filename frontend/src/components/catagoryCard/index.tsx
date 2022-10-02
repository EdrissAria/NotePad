function CatagoryCard() {
  return (
    <div className="catagory-card d-flex justify-content-between align-items-center my-3 p-3 shadow-sm bg-white rounded">
        <div className="d-flex align-items-end">
          <i className="fas fa-clipboard-check p-2 fs-3"></i>
          <input type="text" value="Personal" className="form-control" />
        </div>
        <div>
          <i className="text-success me-4 fas fa-save fs-1"></i>
          <i className="text-danger fas fa-trash fs-1"></i> 
        </div>
    </div>
  )
}

export default CatagoryCard