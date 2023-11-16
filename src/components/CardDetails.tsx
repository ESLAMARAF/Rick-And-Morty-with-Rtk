import React, { useEffect, useState } from 'react'
import './cardDetails.css'
import InputGroup from '../InputGroup.tsx';
import CardCharacter from './CardCharacter.tsx';
import { RequestInfo } from 'undici-types';
import { Link } from 'react-router-dom';
function CardDetails() {
  let [results, setResults] = React.useState([]);
  let [info, setInfo] = useState([]);
  let { air_date, name  } = info;
  let [id, setID] = useState(1);

  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.characters.map(async (x: RequestInfo) => {
          const res = await fetch(x);
          return await res.json();
        })
      );
      setResults(a);
    })();
  }, [api]);
  return (
    <div className="container">
      <div className="Back"><Link className="Back-btn" to="/" ><i className="fa-solid fa-angles-left Back-btn"> </i> Back</Link></div>
      <div className="row-1 ">
        <h1 className="text-center mb-3">
          Episode Name :{" "}
          <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className="text-center">
          Air Date: {air_date === "" ? "Unknown" : air_date}
        </h5>
      </div>
      <div className="row-2">
        <div className="Pick-Episode">
          <h4 >Pick Episode</h4>
          <InputGroup name="Episode" changeID={setID} total={51} />
        </div>
        
          <div className="row-3">
            <CardCharacter  results={results}  />
          </div>
       
      </div>
    </div>

  )
}

export default CardDetails