import  React,{ useEffect } from 'react'
import"./characterPage.css"
import { useDispatch, useSelector } from 'react-redux'
import { getAllCharacters } from '../rtk/slice/Slice.tsx'; 
 function CharacterPage() {
 
  const despatch = useDispatch()
  const {initialCharacters} = useSelector((state:any)=>state?.character)
  
  useEffect(() => {
  despatch(getAllCharacters());
    },[despatch]);

 let disply: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined;
 
 if(initialCharacters){
  disply= initialCharacters?.map((x: { image?: any; name?: any; species?: any; type?: any; status?: any; gender?: any; origin?: any; id?: any; })=>{
    const{id}=x;
    return <div key={id} className="row-item">
      <div className="item-header">
    <img className='Character-img' src={x.image} alt="product" />
  </div>
  <div className="item-description">
 <h2 className='Name'>{` ${x.name}`}</h2>
 <p className={x.species==='Human'?"Human ":'UnHuman'}>species:{` ${x.species}`}</p>
  <p className='type'>type:{x.type===""?'Type Is UnKnun':x.type}</p>
 <p className={x.status==='Alive'?"alive ":'dead'}>status:{` ${x.status}`}</p>
 <p className={x.gender==='Male'?"male ":'female'} > gender :{<i className={x.gender==='Male'?"fa-solid fa-mars ":'fa-solid fa-venus'}/>}{`  ${ x.gender}`}</p>
 <h3 className='origin-location'><i className="fa-solid fa-location-dot location"></i><span className='origin'>{` ${x.origin.name}(${x.origin.url})`}</span></h3>




  </div>
  
  </div>
  })
 }else{
  disply ='No Character Found :/'
 }
  
   
  return (
    
    <>
   
    <div className="contain">
       {disply}
      </div>
    </>
  )
}
export default CharacterPage;