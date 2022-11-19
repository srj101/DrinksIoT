import { createSlice } from "@reduxjs/toolkit";
import { makeCall, makeOrder } from "../API/order";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: null,
    loading: false,
    error: null,
    call: null,
  },
  reducers: {
    addTeaToOrder: (state, action) => {
      const orders = state.orders;
      const teaExists = orders.find((order) => order.id === 2);
      if (teaExists) {
        const newOrders = orders.map((order) => {
          if (order.id === 2) {
            return {
              ...order,
              qty: order.qty + 1,
            };
          }
        });
        state.orders = newOrders;
      } else {
        state.orders = [...state.orders, action.payload.tea];
      }
      state.orders = [...state.orders, action.payload.tea];
    },
    addCoffeeToOrder: (state, action) => {
      const orders = state.orders;
      const coffeeExists = orders.find((order) => order.id === 1);
      if (coffeeExists) {
        const newOrders = orders.map((order) => {
          if (order.id === 1) {
            return {
              ...order,
              qty: order.qty + 1,
            };
          }
        });
        state.orders = newOrders;
      } else {
        state.orders = [...state.orders, action.payload.coffee];
      }
    },
    addWaterToOrder: (state, action) => {
      const orders = state.orders;
      const waterExists = orders.find((order) => order.id === 3);
      if (waterExists) {
        const newOrders = orders.map((order) => {
          if (order.id === 3) {
            return {
              ...order,
              qty: order.qty + 1,
            };
          }
        });
        state.orders = newOrders;
      } else {
        state.orders = [...state.orders, action.payload.water];
      }
    },

    resetOrder: (state) => {
      state.orders = null;
    },
    resetCall: (state) => {
      state.call = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(makeOrder.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(makeOrder.fulfilled, (state, action) => {
      state.orders = null;
      state.loading = false;
    });
    builder.addCase(makeOrder.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(makeCall.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(makeCall.fulfilled, (state, action) => {
      state.call = action.payload.call;
      state.loading = false;
    });
    builder.addCase(makeCall.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});
export const {
  addCoffeeToOrder,
  addTeaToOrder,
  addWaterToOrder,
  resetCall,
  resetOrder,
} = orderSlice.actions;

export default orderSlice.reducer;
