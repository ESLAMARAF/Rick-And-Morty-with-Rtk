import React, { useState } from 'react';
import './App.css';
import Page from './components/Page.tsx'
import { createContext } from 'react';
import NavBar from './components/NavBar.tsx';
import { BrowserRouter as Router , Route, Routes, } from 'react-router-dom';
import CardDetails from './components/CardDetails.tsx'
export const themeContext = createContext<any>(null)
function App() {

  const [ThemeMode,setThemeMode]= useState(true)
  const changeMode =()=>{
      setThemeMode(!ThemeMode)
  }
  return (
    <themeContext.Provider value={{ThemeMode,changeMode}}>
      
      <div className={`Container ${ThemeMode ? 'darkmode' : 'lightmode'}`}>
        <NavBar/>
       
        <Router>
  <Routes>
  <Route  path='/' element={<Page/> } />
  <Route  path={`/eposets`} element={<CardDetails />} />
     </Routes>
  </Router>
      </div>
    </themeContext.Provider>
  );
}

export default App;
