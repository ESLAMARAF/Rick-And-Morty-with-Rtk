import {  FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react'
import { useDispatch} from 'react-redux'; 
import { getAllCharacters } from '../../../rtk/slice/Slice.tsx'; 
function Status() {
    const statusItem =['Alive','Dead','Unknown']
    const despatch = useDispatch()
    const getCharactersName = async (status: any)=>{
        despatch(getAllCharacters({status:status}))
      }
       

  return (
<><FormControl >
  <InputLabel className='status-inp' id="inp">status</InputLabel>
  <Select
    labelId="inp"
  className='status-inp'
    value={statusItem}
    label="status"
  
  >
    <MenuItem onClick={()=>{getCharactersName(statusItem[0])}}  value={statusItem[0]}>{statusItem[0]}</MenuItem>
    <MenuItem onClick={()=>{getCharactersName(statusItem[1])}} value={statusItem[1]}>{statusItem[1]}</MenuItem>
    <MenuItem onClick={()=>{getCharactersName(statusItem[2])}} value={statusItem[2]}>{statusItem[2]}</MenuItem>
  </Select>
</FormControl>
  </>
)}

export default Status
