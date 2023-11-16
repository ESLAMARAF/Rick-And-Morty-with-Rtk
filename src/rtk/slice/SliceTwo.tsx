import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'
export const getpageNumber : any = createAsyncThunk ('pagenumber/getpage', async () =>{
    const res = await fetch(`https://rickandmortyapi.com/api/character`).then((res)=> res.json())
    return res.info;
    
})


const initialState = {
     initialpage:[],
};
const PageNumber=createSlice({
    name :'pagenumber',
    initialState ,
   reducers:{},
     

   extraReducers :{
    [getpageNumber.pending] :(state,action)=>{
        console.log(action);},
    [getpageNumber.fulfilled] :(state,action)=>{
        state.initialpage = action.payload;
    },
    [getpageNumber.rejected] :(state,action)=>{
        console.log(action);
    }
   
 }
    
       
       
     
})

export default PageNumber.reducer;