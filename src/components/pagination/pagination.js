import React from 'react'
import ReactPaginate from 'react-paginate';

const pagination = ({info ,sayfaNumarasi, sayfaGuncelle}) => {

  return (<ReactPaginate className="pagination 
  justify-content-center gap-3 mt-2 mb-5"
  forcePage={sayfaNumarasi===1? 0 : sayfaNumarasi -1}
  nextLabel="Sonraki"
  previousLabel="Önceki"
  nextClassName="btn btn-danger text-decoration-none"
  previousClassName="btn btn-danger"
  pageClassName="page-item"
  pageLinkClassName="page-link"
  activeClassName="active"
  onPageChange={(veri)=>{
    
    sayfaGuncelle(veri.selected +1); //react pagination 0 dan başlar, sayfa 1 den başladığı için +1
  
  }}
  pageCount={info?.pages}/>)
  
};

export default pagination
