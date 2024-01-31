
import React, { useState, useEffect } from 'react'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import Cards from "./components/cards/cards.js";
import Pagination from "./components/pagination/pagination.js";
import Navbar from "./components/navbar/navbar.js";
import Search from "./components/search/search.js";
import {BrowserRouter,Routes,Route} from 'react-router-dom'; //versiyon 6
import Episodes from "./pages/episodes.js";
import Location from "./pages/location.js";

function App(){
  return(
    <BrowserRouter>
    <div className="App">
    <Navbar/>
    </div>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/episodes" element={<Episodes/>}/>
      <Route path="/location" element={<Location/>}/>
    </Routes>
    </BrowserRouter>
  )
}
const Home = () => {
  let [sayfaNumarasi, sayfaGuncelle] = useState(1);
  let [ara, araEtkinlestir] = useState("");
  let [getirilmisVeri, gelenVeriGuncelle] = useState([]);
  let { info, results } = getirilmisVeri;


  let api = `https://rickandmortyapi.com/api/character/?page=${sayfaNumarasi}&name=${ara}`;

  useEffect(() => {
    (async function () {
      let veri = await fetch(api).then((res) => res.json());
      gelenVeriGuncelle(veri);
    })();
  }, [api])
  return (
    <div className="App">
    
      <div className="nav d-flex justify-content-center align-center p-4 gap-5">
        
        <Search sayfaGuncelle={sayfaGuncelle} araEtkinlestir={araEtkinlestir} />
      </div>
      <div className="container">
        <div className="row">



          <div className="col-12">
            <div className="row">
              <Cards results={results} />

            </div>
          </div>
        </div>
      </div>

      <Pagination info={info} sayfaNumarasi={sayfaNumarasi} sayfaGuncelle={sayfaGuncelle} />
    </div>
  );
}

export default App;
