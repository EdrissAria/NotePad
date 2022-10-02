import {createSlice} from '@reduxjs/toolkit'
import { useDarkMode } from '../hooks/useDarkMode';

const getCookie = useDarkMode('dark')

export const darkModeSlice = createSlice({
    name: 'theme', 
    initialState: {value: getCookie ?? false},
    reducers: {
        changeTheme: (state) => {
            document.cookie = 'dark='+(state.value = !state.value);
        }
    }
})

export const {changeTheme} = darkModeSlice.actions; 

export default darkModeSlice.reducer; 