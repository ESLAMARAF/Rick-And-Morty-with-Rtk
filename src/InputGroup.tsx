import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

function InputGroup({total ,name,changeID}) {
  
  
  return (
    <div>
      <FormControl >
  <InputLabel className='status-inp' id="inp">Episodes</InputLabel>
  <Select
    labelId="inp"
  className='Input-inp'
    value=''
    label="Episodes"
  onChange={e=>changeID(e.target.value)}
  >
   
    {[...Array(total).keys()].map((x)=>{
      return  <MenuItem   value={x +1}>{name}-{x +1}</MenuItem>
    })}
    
    
  </Select>
</FormControl>
    </div>
  )
}

export default InputGroup