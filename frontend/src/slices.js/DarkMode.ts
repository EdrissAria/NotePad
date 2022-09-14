import {createSlice} from '@reduxjs/toolkit'

export const darkModeSlice = createSlice({
    name: 'theme', 
    initialState: {value: false},
    reducers: {
        changeTheme: (state) => {
            localStorage.setItem('darkMode', JSON.stringify(state.value = !state.value));
        }
    }
})

export const {changeTheme} = darkModeSlice.actions; 

export default darkModeSlice.reducer; 