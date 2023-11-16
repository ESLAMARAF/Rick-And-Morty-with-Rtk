import {  FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'
import { useDispatch} from 'react-redux'; 
import { getAllCharacters } from '../../../rtk/slice/Slice.tsx'; 
function Gender() {
  const Gender =['Male','Female']
  const despatch = useDispatch()
  const getCharactersName = async (gender: string)=>{
   despatch(getAllCharacters({gender:gender}))
  }
  return (
    <div>
        <><FormControl >
  <InputLabel className='status-inp' id="inp">Gender</InputLabel>
  <Select
    labelId="inp"
  className='status-inp'
    value={Gender}
    label="Gender"
  
  >
    <MenuItem onClick={()=>{getCharactersName(Gender[0])}}  value={Gender[0]}>{Gender[0]}</MenuItem>
    <MenuItem onClick={()=>{getCharactersName(Gender[1])}} value={Gender[1]}>{Gender[1]}</MenuItem>
    
  </Select>
</FormControl>
  </>
    </div>
  )
}

export default Gender