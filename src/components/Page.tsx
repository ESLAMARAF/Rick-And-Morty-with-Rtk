import React, { useContext, useEffect, useState } from 'react';
import "./page.css";
import Filter from './fiter/Filter.tsx';
import {themeContext} from '../App.tsx'
import CharacterPage from './CharacterPage.tsx';
import ReactPaginate from 'react-paginate';
import {Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; 
import { getpageNumber } from '../rtk/slice/SliceTwo.tsx';
import { getAllCharacters } from '../rtk/slice/Slice.tsx'; 
function Page(){
const {ThemeMode}=useContext(themeContext) 
 
const despatch = useDispatch()

  


 
 
   const {initialpage} = useSelector((state)=>state?.pagenumber)
  
 
const getChracterPages = async (pageNumper: number)=>{
  despatch(getAllCharacters({pageNumper:pageNumper}))
}

useEffect(() => {
  despatch(getpageNumber());
  getChracterPages(1);
  },[despatch]);
  

 return (
   <>
   <div className='main-page'>
   <div className="filter-bar">
     <div className="head-text">
       <h1>Find Rich and Morty characters</h1>
     </div>
     <div className={`filtering-input ${ThemeMode?'input-dark':'input-light'}`}>
      <Filter/>
     </div>
     <div className={`pagination ${ThemeMode?'dark-pagin':'light-pagin'}`}>
<ReactPaginate 
previousClassName='previous' nextClassName="next" 
 pageClassName='page-item' pageLinkClassName='page-link'
  className='pagin' pageCount={initialpage.pages} 
   onPageChange={(data)=>{getChracterPages(data.selected +1)}}/>
      <div className="eposets">
   
  <Link to="/eposets" className={`eposets-btn ${ThemeMode?'dark-eposets':'light-eposets'}`}>
  Episode
            </Link>
    </div>
      
  
      </div>
      
    </div>
    
  </div>
  <div className="character-page">
  <CharacterPage   /> 
  </div>
  <div className={`pagination ${ThemeMode?'dark-pagin':'light-pagin'}`}>
  <ReactPaginate 
previousClassName='previous' nextClassName="next" 
 pageClassName='page-item' pageLinkClassName='page-link'
  className='pagin' pageCount={initialpage.pages} 
   onPageChange={(data)=>{getChracterPages(data.selected +1)}}/>
  </div>
  </>
  )
}

export default Page;