import React from 'react'
import stil from "./search.module.css";

const search = ({ araEtkinlestir, sayfaGuncelle }) => {
    return (
        <form className="d-flex justify-content-center gap-4 mb-5">
            <input onChange={e => {
                sayfaGuncelle(1);
                araEtkinlestir(e.target.value)
            }} placeholder='Aramak İstediğin Karakteri Yaz' type="text" className={stil.input} />
            <button onClick={e=>{e.preventDefault();}} className={`${stil.btn} btn btn-outline-success border-3 fs-5`}>Ara</button>
        </form>
    )
}

export default search
