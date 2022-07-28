import { configureStore } from '@reduxjs/toolkit'
import homeSlicer from '../feature/home/homeSlicer'

export const store = configureStore({
  reducer: {
    home: homeSlicer
  },
})