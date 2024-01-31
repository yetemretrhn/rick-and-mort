import React , { useState ,useEffect} from 'react';
import Cards from "../components/cards/cards.js";
import InputGroup from "../components/Filters/Category/InputGroup.js";
const Location = () => {
  let[id, setID] = useState(1);
  let [info, setInfo] = useState([]);
  let [results,setResults] = useState([]);
  let {name,type,dimension} = info;

  let api = `https://rickandmortyapi.com/api/location/${id}`;

  useEffect(()=>{

    (async function(){
      let data = await fetch(api).then(res=>res.json());
      setInfo(data);

      let a = await Promise.all(
        data.residents.map((ind)=>{
          return fetch(ind).then(res=>res.json());
        }));
      
      setResults(a);
    })()
  },[api])
  return (
    <div className="container">
   <div className="row">
    <h1 className="text-center mb-3">
      Lokasyon : {name ===""? "Bilinmiyor" : name}
    </h1>
    <h5 className="text-center">
      Boyut :  {dimension ===""? "Bilinmiyor" : dimension}
    </h5>
    <h6 className="text-center">
      Tip :  {type ===""? "Bilinmiyor" : type}
    </h6>
   </div>
   <div className="row">
    <div className="col-3">
    <h3 className="text-center mb-3">
    Lokasyon Seç
    </h3>
    <InputGroup setID={setID} name="Lokasyon" total={126}/>
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

export default Location
