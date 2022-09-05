import './style.css'

function Searchbar() {
  return (
    <div className="search d-flex justify-content-start align-items-center mb-2 shadow-sm">
        <i className='ms-3 text-black-50 fas fa-search'></i><input type="search" className="search-input px-2" placeholder='search'/>
    </div>
  )
}

export default Searchbar