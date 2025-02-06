import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [], // Array of cart items
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            state.items.push(action.payload); // Add new product
        },
        removeItem(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload.id); // Remove product by id
        },
        clearCart(state) {
            state.items = [];
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
