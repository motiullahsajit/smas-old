import React from 'react';
import Banner from '../Banner/Banner';
import Nav from '../Nav/Nav';
import './HomeScreen.css';

const HomeScreen = () => {
    return (
        <main className='homeScreen'>
            <Nav />
            <Banner />
            {/* Row */}
        </main>
    );
};

export default HomeScreen;