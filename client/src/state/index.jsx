import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    user: null,
    token: null
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        setLogin: (state, action) => {
            state.user = action.payload.user
            state.token = action.payload.token
            console.log(state.user)
            console.log("jhak")
        },
        setLogout: (state) => {
            state.user = null
            state.token = null
        },
        updateUser: (state, action) => {
            state.user = action.payload.user;
            console.log(state.user.name)
         },
    }
})

export const {setLogin, setLogout, updateUser} = authSlice.actions
export default authSlice.reducer