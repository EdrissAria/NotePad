import React from 'react'
type propsType = {
    children: React.ReactNode
}

function ErrorMessage({children}: propsType) {
  return (
    <div className='text-danger'>
        {children}
    </div>
  )
}

export default ErrorMessage