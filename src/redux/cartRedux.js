import {createSlice} from "@reduxjs/toolkit"
const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products:[],
        quanitity: 0,
        total: 0
    },
    reducers:{
        addProduct: (state, action)=>{
            state.quanitity +=1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        },
         //DELETE
        deleteProductStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        deleteProductSuccess: (state, action) => {
            console.log("form delete : ",action.payload);
            state.isFetching = false;
            state.products.splice(
            state.products.findIndex((item) => item._id === action.payload._id),
            1
            );
            state.quanitity -=1;
            state.total -= action.payload.price * action.payload.quantity;

        },
        deleteProductFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    },
});

export const {addProduct, deleteProductStart,deleteProductSuccess, deleteProductFailure} = cartSlice.actions;
export default cartSlice.reducer;