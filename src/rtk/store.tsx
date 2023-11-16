import { configureStore } from '@reduxjs/toolkit'
import  AllCharactersSlice  from './slice/Slice.tsx';
import pageNumber from './slice/SliceTwo.tsx'
import AllCharactersNames  from './slice/Slice.tsx';
const storeApp = configureStore({
  reducer: {
    character : AllCharactersSlice,
    pagenumber : pageNumber,
    characterName : AllCharactersNames
}
});

export default storeApp;