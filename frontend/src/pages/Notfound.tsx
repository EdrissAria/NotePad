import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'

function Notfound() {
  const navigate = useNavigate(); 
  useEffect(()=>{
    const timeout = setTimeout(() => {
      navigate('/')
    }, 3000);
    return () => clearTimeout(timeout) 
  }, [])
  return (
    <div className='mt-5 d-flex justify-content-center align-items-center'>
      <div className='rounded text-center p-3'>
        <p className='fs-1'>OOPS!</p>
        <p className='fs-4'>Page note found</p>
      </div>
    </div>
  )
}

export default Notfound