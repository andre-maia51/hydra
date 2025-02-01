import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ToastProps } from "@renderer/components/toast/toast";

export interface ToastState {
  title: string;
  message?: string;
  type: ToastProps["type"];
  visible: boolean;
}

const initialState: ToastState = {
  title: "",
  message: "",
  type: "success",
  visible: false,
};

export const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    showToast: (state, action: PayloadAction<Omit<ToastState, "visible">>) => {
      state.title = action.payload.title;
      state.message = action.payload.message;
      state.type = action.payload.type;
      state.visible = true;
    },
    closeToast: (state) => {
      state.visible = false;
    },
  },
});

export const { showToast, closeToast } = toastSlice.actions;
