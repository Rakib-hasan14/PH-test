import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container p-0">
                <div className='nav-icon'>
                    <h1 className='nav-heading pt-3'>Dev-Courses</h1>
                </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className='w-100 d-flex justify-content-end'>
                    <div class="navbar-nav">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        <a class="nav-link" href="#">Career</a>
                        <a class="nav-link" href="#">Blog</a>
                        <a class="nav-link" href="#" tabindex="-1">About us</a>
                        <button className='d-inline btn1 me-3 mb-2'>Log in</button>
                        <button className='d-inline btn2'>Sign up</button>
                    </div>
                    </div>
                    </div>
                 </div>
            </nav>
            </div>
        </header>
    );
};

export default Header;