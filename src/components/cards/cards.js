import React from 'react'
import stiller from './cards.module.css'

const cards = ({ results }) => {

    let yazdir;
    console.log(results);
    if (results) {
        yazdir = results.map(sira => {
            let { id, name, image, location, status } = sira;

            return (<div key={id} className="col-3 my-3 position-relative">
                <div className={stiller.cards}>
                    <img src={image} alt="resim" className={`${stiller.img} img-fluid`} />
                    <div style={{ padding: "20px" }} className="icerik">

                        <div className="fs-6  mb-3"><span className="fw-bold">Adı :</span> {name}</div>
                        <div className="">
                            <div className="fs-6 fw-bold">Son Konumu</div>
                            <div className="fs-6">{location.name}</div>
                        </div>
                    </div>
                </div>
                {(() => {
                    if (status === "Dead") {
                        return (

                            <div className={`${stiller.badge} position-absolute badge bg-danger`}>Ölü</div>
                        )
                    }
                    else if (status === "Alive") {
                        return (

                            <div className={`${stiller.badge} position-absolute badge bg-success`}>Yaşıyor</div>
                        )
                    }
                    else {
                        return (

                            <div className={`${stiller.badge} position-absolute badge bg-secondary`}>Bilinmiyor</div>
                        )
                    }
                })()}

            </div>

            );
        });
    }
    else {
        yazdir = "Karakter Bulunamadı !!!";
    }
    return (<> {yazdir} </>)
}

export default cards
