import React from 'react'
import './cardCharacter.css'
function CardCharacter({results}) {
  let disply;
 if(results){
  disply= results.map((x)=>{
    const{id}=x;
    return <div key={id} className="row-item">
      <div className="item-header">
    <img className='Character-img' src={x.image} alt="product" />
  </div>
  <div className="item-description">
  <h2 className='Name'>{` ${x.name}`}</h2>
 <p className={x.species==='Human'?"Human ":'UnHuman'}>{` ${x.species}`}</p>
  <p className='type'>{x.type===""?'Type Is UnKnun':x.type}</p>
 <p className={x.status==='Alive'?"alive ":'dead'}>{` ${x.status}`}</p>
 <p className={x.gender==='Male'?"male ":'female'} >{<i className={x.gender==='Male'?"fa-solid fa-mars ":'fa-solid fa-venus'}/>}{`  ${ x.gender}`}</p>
 <h3 className='origin-location'><i className="fa-solid fa-location-dot location"></i><span className='origin'>{` ${x.origin.name}(${x.origin.url})`}</span></h3>




  </div>
  
  </div>
  })
 }else{
  disply ='No Character Found :/'
 }
  
   
  return (
    <div className="containe">
{disply}
    </div>
  )
}

export default CardCharacter