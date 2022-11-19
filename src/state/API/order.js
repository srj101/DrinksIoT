import { createAsyncThunk } from "@reduxjs/toolkit";

export const makeOrder = createAsyncThunk("order/makeOrder", async () => {
  const response = await fetch(
    "https://boiling-escarpment-76670.herokuapp.com/api/v1/bus"
  );
  return await response.json();
});

export const makeCall = createAsyncThunk("order/makeCall", async () => {
  const response = await fetch(
    "https://boiling-escarpment-76670.herokuapp.com/api/v1/bus"
  );
  return await response.json();
});
