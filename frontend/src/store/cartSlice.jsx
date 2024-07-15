import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalItems: 0,
    totalAmount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const itemIndex = state.items.findIndex(item => item.productId === action.payload.productId);
            if (itemIndex !== -1) {
                state.items[itemIndex].quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload);
            }
            state.totalItems += action.payload.quantity;
            state.totalAmount += action.payload.price * action.payload.quantity;
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.productId !== action.payload.productId);
        },
        clearCart: (state) => {
            state.items = [];
            state.totalItems = 0;
            state.totalAmount = 0;
        }
    }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

