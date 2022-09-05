import React from 'react'
type paramType = {
    children: React.ReactNode
}
function ErrorMessage({children}: paramType) {
  return (
    <div className='text-danger'>
        {children}
    </div>
  )
}

export default ErrorMessage