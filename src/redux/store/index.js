import { configureStore } from '@reduxjs/toolkit'
import homeSlicer from '../feature/home/homeSlicer'
import detailSlicer from '../feature/details/detailsSlicer'

export const store = configureStore({
  reducer: {
    home: homeSlicer,
    details: detailSlicer,
  },
})