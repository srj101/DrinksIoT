import { createSlice } from "@reduxjs/toolkit";
import { makeCall, makeOrder } from "../API/order";

const init = {
  orders: [],
  loading: false,
  error: null,
  call: null,
  teaNoSugar: {
    qty: 0,
  },
  teaWithSugar: {
    qty: 0,
  },
  coffeeWithSugar: {
    qty: 0,
  },
  coffeeNoSugar: {
    qty: 0,
  },
  water: {
    qty: 0,
  },
};

const orderSlice = createSlice({
  name: "order",
  initialState: init,
  reducers: {
    addTeaWithSugarOrder: (state, action) => {
      if (action.payload.qty > 0) {
        state.teaWithSugar.qty = action.payload.qty;
      }
    },
    addTeaNoSugarOrder: (state, action) => {
      if (action.payload.qty > 0) {
        state.teaNoSugar.qty = action.payload.qty;
      }
    },
    addCoffeeWithSugarToOrder: (state, action) => {
      if (action.payload.qty > 0) {
        state.coffeeWithSugar.qty = action.payload.qty;
      }
    },
    addCoffeeNoSugarToOrder: (state, action) => {
      if (action.payload.qty > 0) {
        state.coffeeNoSugar.qty = action.payload.qty;
      }
    },
    addWaterToOrder: (state, action) => {
      if (action.payload.qty > 0) {
        state.water.qty = action.payload.qty;
      }
    },

    confirmOrder: (state, action) => {
      state.orders = [
        {
          teaWithSugar: state.teaWithSugar.qty,
          qty: state.teaWithSugar.qty,
        },
        {
          teaNoSugar: state.teaNoSugar.qty,
          qty: state.teaNoSugar.qty,
        },
        {
          coffeeWithSugar: state.coffeeWithSugar.qty,
          qty: state.coffeeWithSugar.qty,
        },
        {
          coffeeNoSugar: state.coffeeNoSugar.qty,
          qty: state.coffeeNoSugar.qty,
        },
        {
          water: state.water.qty,
        },
      ];
      state.orders = state.orders.filter((item) => Object.values(item)[0] > 0);
    },

    resetOrder: (state) => {
      state = init;
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
  addCoffeeNoSugarToOrder,
  addCoffeeWithSugarToOrder,
  addTeaNoSugarOrder,
  addTeaWithSugarOrder,
  addWaterToOrder,
  resetCall,
  resetOrder,
  confirmOrder,
} = orderSlice.actions;

export default orderSlice.reducer;
