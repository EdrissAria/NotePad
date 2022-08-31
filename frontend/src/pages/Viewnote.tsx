import CkEditor from '../components/ckeditor'
const now = new Date().toDateString(); 
function Viewnote() {
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
          <p>{now}</p>
        </div>
        {/*ckeditor*/}
        <div className="mt-4">
          <CkEditor />
        </div>
      </div>
    </main>
  )
}

export default Viewnote