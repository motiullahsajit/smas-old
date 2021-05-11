import React from 'react';
import Banner from '../Banner/Banner';
import Nav from '../Nav/Nav';
import Row from '../Row/Row';
import './HomeScreen.css';

const HomeScreen = () => {
    return (
        <main className='homeScreen'>
            <Nav />
            <Banner />
            <Row/>
            <Row/>
            <Row/>
            <Row/>
        </main>
    );
};

export default HomeScreen;