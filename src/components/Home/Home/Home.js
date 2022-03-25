import React from 'react';
import Banner from '../Banner/Banner';
import Fetaures from '../Fetaures/Fetaures';
import Managements from '../Managements/Managements';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Fetaures></Fetaures>
            <Managements></Managements>
        </div>
    );
};

export default Home;