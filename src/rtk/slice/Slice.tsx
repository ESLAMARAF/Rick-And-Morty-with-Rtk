import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'


export const getAllCharacters :any = createAsyncThunk ('characters/getAll',async ( {pageNumper  ,name ,status ,gender}) =>{
    const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumper}&name=${name?name:""}&status=${status?status:""}&gender=${gender?gender:""}`).then((res)=> res.json())
    return res.results;
})



const initialState = {
     initialCharacters:[],
};
const AllCharactersSlice=createSlice({
    name :'character',
    initialState ,
   reducers:{},
     
     extraReducers :{
        [getAllCharacters.pending] :(_state: any,action: any)=>{
            console.log(action);},
        [getAllCharacters.fulfilled] :(state: { initialCharacters: any; },action: { payload: any; })=>{
            state.initialCharacters = action.payload;
        },
        [getAllCharacters.rejected] :(_state: any,action: any)=>{
            console.log(action);
        }
       
     }
})

export default AllCharactersSlice.reducer;

