import {  Box, TextField } from '@mui/material'
import React from 'react'
import './Inputs.css'
import { useDispatch} from 'react-redux'; 
import { getAllCharacters } from '../../../rtk/slice/Slice.tsx'; 
function Name() {
  const Name =['Name']
   const despatch = useDispatch()
   const getCharactersName = async (name: string)=>{
    despatch(getAllCharacters({name:name}))
  }

  return (  
  <div>
      <Box
      className='status-inp'
      component="form"
      
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
        className='Input-Name'
       onChange={(e)=>{
        getCharactersName(e.target.value)
       }}
       label={Name}
          size='small'
        />
    
  </div>
     </Box>
     
    </div>
  )
}

export default Name