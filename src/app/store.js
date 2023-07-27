import { configureStore } from '@reduxjs/toolkit'
import { userApi } from '../api/userApi'
import userSlice from '../feature/userSlice'
import { planApi } from '../api/planApi'
import planSlice from '../feature/planSlice'

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    userSlice: userSlice,

    [planApi.reducerPath]: planApi.reducer,
    planSlice: planSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware, planApi.middleware),  
})