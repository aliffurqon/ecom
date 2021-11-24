import React from 'react'
import gambar from '../img/gamba1.jpg'
import hat from '../img/hat.jpg'
import tshirt from '../img/tshirt.jpg'
import aksesoris from '../img/aksesoris.jpg'

const Home = () => {
    return (
        <div>
            <div class="bg-image d-flex justify-content-center align-items-center">
                <img src={gambar} alt="gambar1"/>
            </div>
            <div className="row">
                <div className="col-sm-4 col-xs-4">
                    <img src={hat} alt="hat"/>
                </div>
                <div className="col-sm-4 col-xs-4">
                    <img src={tshirt} alt="hat"/>
                </div>
                <div className="col-sm-4 col-xs-4">
                    <img src={aksesoris} alt="hat"/>
                </div>
            </div>
        </div>
    )
}

export default Home
