import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    porductData: [],
    userInfo: null
}

export const bazarSlice = createSlice({
    name: "bazar",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.porductData.find(item => item._id === action.payload._id)

            if (item) {
                item.quantity += action.payload.quantity
            }
            else {
                state.porductData.push(action.payload)

            }

        },

        removeToCart: (state, action) => {
            state.porductData = state.porductData.filter(item => item._id !== action.payload)
        },
        resetItem: (state, action) => {
            state.porductData = []
        },

        incrementQuantity: (state, action) => {
            const item = state.porductData.find(item => item._id === action.payload._id)
            if (item) {
                item.quantity++
            }
        },

        decrementQuantity: (state, action) => {
            const item = state.porductData.find(item => item._id === action.payload._id)
            if (item.quantity === 1) {
                item.quantity - 1
            }
            else {
                item.quantity--
            }
        },

        addUser:(state,action)=>{
            state.userInfo= action.payload
        }, 
        
        removeUser:(state,action)=>{
            state.userInfo= null
        }

    }

})

export const { addToCart, removeToCart, resetItem, incrementQuantity, decrementQuantity ,addUser,removeUser} = bazarSlice.actions
export default bazarSlice.reducer