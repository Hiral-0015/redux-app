import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    value: [],
}

export const fetchUserApi = () => (dispatch) => {
    axios.get('https://student-api.mycodelibraries.com/api/product/get').then((response) => {
        dispatch(setValue(response.data.data))
    })
}
export const addUserApi = (data) => (dispatch) => {
    axios.post('https://student-api.mycodelibraries.com/api/product/add', data).then((response) => {
        dispatch(fetchUserApi())
    })
}
export const editUserApi = (data) => (dispatch) => {
    axios.post('https://student-api.mycodelibraries.com/api/product/update', data).then((response) => {
        dispatch(fetchUserApi())
    })
}
export const deleteUserApi = (id) => (dispatch) => {
    axios.delete(`https://student-api.mycodelibraries.com/api/product/delete?id=${id}`).then((response) => {
        dispatch(fetchUserApi())
    })
}
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setValue: (state, action) => {
            state.value = action.payload
        }
    }
})
export const { setValue } = userSlice.actions
export default userSlice.reducer