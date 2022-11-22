import { createSlice } from "@reduxjs/toolkit";
import { makeCall, makeOrder } from "../API/order";

const init = {
  orders: [],
  loading: false,
  error: null,
  call: null,
  tea: {
    qty: 0,
    options: [],
  },
  coffee: {
    qty: 0,
    options: [],
  },
  water: {
    qty: 0,
    options: [],
  },
};

const orderSlice = createSlice({
  name: "order",
  initialState: init,
  reducers: {
    addTeaToOrder: (state, action) => {
      state.tea.qty = action.payload.qty;
      state.tea.options.push(action.payload.option);
    },
    addCoffeeToOrder: (state, action) => {
      const qty = action.payload.qty;

      state.coffee.qty = qty;
      state.coffee.options.push(action.payload.option);
    },
    addWaterToOrder: (state, action) => {
      const qty = action.payload.qty;

      state.water.qty = qty;
      state.water.options.push(action.payload.option);
    },

    confirmOrder: (state, action) => {
      if (
        state.coffee.qty === 0 &&
        state.tea.qty === 0 &&
        state.water.qty === 0
      ) {
        state.error = "Nothing in the order!";
      } else {
        (state.tea = {
          name: "Tea",
          qty: state.tea.qty,
          options: state.tea.options,
        }),
          (state.coffee = {
            name: "Coffee",
            qty: state.coffee.qty,
            options: state.coffee.options,
          });
        state.water = {
          name: "Water",
          qty: state.water.qty,
          options: state.water.options,
        };
        state.orders = [state.tea, state.coffee, state.water];
      }
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
  addCoffeeToOrder,
  addTeaToOrder,
  addWaterToOrder,
  resetCall,
  resetOrder,
  confirmOrder,
} = orderSlice.actions;

export default orderSlice.reducer;
