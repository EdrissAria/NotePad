import { useState } from "react"
import TitleBar from "../components/titlebar"
import {useDispatch} from "react-redux"
import {changeTheme} from "../slices.js/DarkMode"
import {useSelector} from 'react-redux'

function Setting() {
  const theme = useDispatch(); 
  const darkTheme = useSelector((state: any)=> state.theme.value);

  const changeThemeColor = () => {
    theme(changeTheme())
    localStorage.setItem('darkMode', darkTheme); 
  } 

  return (
    <div className="container" style={{marginTop: '60px'}}>
      <div className="d-flex justify-content-center">
        <TitleBar title="Settings" type="none" />
      </div>
      <div className="mt-3 shadow-sm p-4 bg-white w-100 rounded d-flex justify-content-between align-items-center">
        <label htmlFor="dark-mode" className="text-black-50 fs-2 ">
          Dark Mode
          </label>
            <div className='form-check form-switch'>
              <input type="checkbox" id="dark-mode" onChange={changeThemeColor} checked={darkTheme} className='form-check-input m-3 fs-4' />
            </div>
      </div>
    </div>
  )
}

export default Setting