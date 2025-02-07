import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    total:0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
        const existingProduct = state.items.find((item) => item._id === action.payload._id);
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity || 1; // Update quantity
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); // Add new product
      }
        },
        removeItem(state, action) {
            state.items = state.items.filter(item => item._id !== action.payload); // Remove product by id
        },
        clearCart(state) {
            state.items = [];
        },
        setTotal(state,action){
        let newTotal = 0
        state.items.forEach(
        (item) => Math.round((newTotal += item.price * item.quantity) * 100) / 100
        )
        state.total = newTotal
        }
    },
});

export const { addItem, removeItem, clearCart ,setTotal} = cartSlice.actions;
export default cartSlice.reducer;
