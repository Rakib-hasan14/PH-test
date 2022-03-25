import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='header'>
            <div className='header-content'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <h1 className='header-heading pe-4 my-4'><span className='cus-org'>Studying</span> online is now much easier</h1>
                                <p className='header-heading-scnd pe-4 my-4'>Skilline is an interesting platform that will teach you in more an interactive way</p>
                                <button className='btn3 my-4 me-4'>Join for free</button>
                                <span><i class="fas-solid fa-play"></i></span>
                            </div>
                            <div className='col-md-6 z-index'>
                                <div className='header-right'>
                                    <img className='w-100' src="https://i.ibb.co/WsVb1qs/header-pic.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Banner;