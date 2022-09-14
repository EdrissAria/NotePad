import CkEditor from '../components/ckeditor'
const now = new Date().toDateString(); 
function Viewnote() {
  return (
    <main>
      <div className="container pt-4 view-note">
        <div className="view-titlebar d-flex justify-content-between align-items-center">
          <div className='d-flex justify-content-start align-items-center'>
            <i className="fas fa-clipboard fs-4 m-2"></i>
            <select name="" id="" className='form-select form-select-sm border-0'>
              <option selected>No catagory</option>
              <option value="work">work</option>
              <option value="personal">personal</option>
              <option value="life">life</option>
              <option value="home">home</option>
            </select>
          </div>
          <p>{now}</p>
        </div>
        {/*ckeditor*/}
        <div className="mt-4">
          <CkEditor />
        </div>
        <button className='btn mt-3 btn-success rounded-3 px-4 py-2 shadow-sm'>Update</button>
      </div>
    </main>
  )
}

export default Viewnote