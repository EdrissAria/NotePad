import {createSlice} from '@reduxjs/toolkit'

export const LoginSlice = createSlice({
    name: 'theme', 
    initialState: {value: false},
    reducers: {
        login: (state) => {
            localStorage.setItem('darkMode', JSON.stringify(state.value = !state.value));
        }
    }
})

export const {login} = LoginSlice.actions; 

export default LoginSlice.reducer; 