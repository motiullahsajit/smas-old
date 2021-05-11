import React from 'react';
import requests from '../../Requests';
import Banner from '../Banner/Banner';
import Nav from '../Nav/Nav';
import Row from '../Row/Row';
import './HomeScreen.css';

const HomeScreen = () => {
    return (
        <main className='homeScreen'>
            <Nav />
            <Banner />
            <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
            <Row title='Trending Now' fetchUrl={requests.fetchTrending}/>
            <Row title='Top Rated' fetchUrl={requests.fetchTopRated}/>
            <Row title='Action Movies' fetchUrl={requests.fetchActionMovies}/>
            <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies}/>
            <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies}/>
            <Row title='Romacne Movies' fetchUrl={requests.fetchRomanceMovies}/>
            <Row title='Documentaris' fetchUrl={requests.fetchDocumentaries}/>
        </main>
    );
};

export default HomeScreen;