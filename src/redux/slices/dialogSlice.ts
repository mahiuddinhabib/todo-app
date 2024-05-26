import { ITask } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DialogState {
  open: boolean;
  selectedTask: ITask | null;
}

const initialState: DialogState = {
  open: false,
  selectedTask: null,
};

export const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    setOpen: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload;
    },
    setSelectedTask: (state, action: PayloadAction<ITask | null>) => {
      state.selectedTask = action.payload;
    },
  },
});

export const { setOpen, setSelectedTask } = dialogSlice.actions;

export default dialogSlice.reducer;
