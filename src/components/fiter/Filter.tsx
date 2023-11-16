import React,{useState} from 'react'
import Name from './inputs/Name.tsx'
import Status from './inputs/Status.tsx'
import Gender from './inputs/Gender.tsx'



function Filter() {
  const [cart, setCart] = useState(false);
    const openCart = () => {
      setCart(!cart);
    };
  return (
<>
        <div className={`inputs ${cart ? "open-inputs" : "closed-inputs"}`}>
        <Name />
        <Status/>
        <Gender /> 
        <button className='filter-btn-remove' onClick={openCart} >{<i className="fa-solid fa-xmark"></i>}</button>
    </div>
    <div className={`filter-btn ${cart ? "open-filter" : "closed-filter"}`}> 
    <button
        onClick={openCart}
        className="btn-add-filter"
      >Filter</button>
      </div>
    </>
  )
}

export default Filter