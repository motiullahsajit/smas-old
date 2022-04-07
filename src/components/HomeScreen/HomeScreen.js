import React from 'react';
import requests from '../../Requests';
import Banner from '../Banner/Banner';
import Nav from '../Nav/Nav';
import Row from '../RowTrailers/Row';
import RowMovies from '../RowMovies/RowMovies';
import ReactPlayer from 'react-player'
import './HomeScreen.css';
import hindiData from './hindiData.json'
import hollywoodData from './hollywoodData.json'

const HomeScreen = () => {
  return (
    <main className='homeScreen'>
      <Nav />
      <Banner />
      <RowMovies title='Hindi Movies' movies={hindiData} />
      <RowMovies title='Hollowood Movies' movies={hollywoodData} />
      {/* <ReactPlayer controls url='https://www.youtube.com/watch?v=X-cdWlx7hQI' /> */}
      {/* <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Romacne Movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Documentaris' fetchUrl={requests.fetchDocumentaries} /> */}
    </main>
  );
};

export default HomeScreen;