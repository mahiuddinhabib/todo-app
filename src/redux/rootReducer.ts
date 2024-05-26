import { baseApi } from "./api/baseApi";
import  dialogReducer  from "./slices/dialogSlice";


export const reducer = {
  dialog: dialogReducer,
  [baseApi.reducerPath]: baseApi.reducer,
};
