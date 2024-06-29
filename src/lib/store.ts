import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./features/bookSlice";
// import apartmentSlice from "./features/apartmentSlice";

export const bookStore = () => {
  return configureStore({
    reducer: {
      booking: bookSlice,
    //   apartment: apartmentSlice,
    },
  });
};

export type AppStore = ReturnType<typeof bookStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
