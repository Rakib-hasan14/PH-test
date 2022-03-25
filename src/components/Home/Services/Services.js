import React from 'react';
import './Services.css'

const Services = () => {
    return (
        <div className='my-5'>
            <div className='ser-h text-center mb-5'>
                <h1>Services</h1>
            </div>
            <div className='container'>
                <div className='row gy-4'>
                <div className='col-md-6'>
                    <div className="card">
                        <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHqMRuA0NeJITnoODJmqye_ADSszuLSg4Elg&usqp=CAU" alt="Card image cap"/>
                        <div className="card-body mt-3">
                            <h5 className="card-title">Web development course</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Buy now</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className="card" >
                        <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlOd7igtWH7kB__KoxiILB3Yz5r7IMFUnSdg&usqp=CAU" alt="Card image cap"/>
                        <div className="card-body mt-3">
                            <h5 className="card-title">Computer networking course</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Buy now</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className="card">
                        <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe9yCn5hT2uLaFagrBtscJAzDAx6ZUxKM7cQ&usqp=CAU" alt="Card image cap"/>
                        <div className="card-body mt-3">
                            <h5 className="card-title">English course</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Buy now</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className="card" >
                        <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCBEIapFuOrL_DaZHqHB3c1oBEPxX8MJPkIQ&usqp=CAU" alt="Card image cap"/>
                        <div className="card-body mt-3">
                            <h5 className="card-title">Computer networking course</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Buy now</a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Services;