import React , { useState ,useEffect} from 'react';
import Cards from "../components/cards/cards.js";
import InputGroup from "../components/Filters/Category/InputGroup.js";
const Episodes = () => {
  let[id, setID] = useState(1);
  let [info, setInfo] = useState([]);
  let [results,setResults] = useState([]);
  let {air_date, name} = info;

  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(()=>{

    (async function(){
      let data = await fetch(api).then(res=>res.json());
      setInfo(data);

      let a = await Promise.all(
        data.characters.map((ind)=>{
          return fetch(ind).then(res=>res.json());
        }));
      
      setResults(a);
    })()
  },[api])
  return (
    <div className="container">
   <div className="row">
    <h1 className="text-center mb-3">
      Bölüm : {name ===""? "Bilinmiyor" : name}
    </h1>
    <h5 className="text-center">
      TARİH :  {air_date ===""? "Bilinmiyor" : air_date}
    </h5>
   </div>
   <div className="row">
    <div className="col-3">
    <h3 className="text-center mb-3">
    Bölüm Seç
    </h3>
    <InputGroup setID={setID} name="Bölüm" total={51}/>
    </div>
    <div className="col-8">
      <div className="row">
        <Cards results={results}/>
      </div>
      
    </div>
   </div>
    </div>
  )
}

export default Episodes
