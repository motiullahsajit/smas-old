import axios from '../../axios';
import React, { useEffect, useState } from 'react';
import './Row.css';

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
    const [moveis, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl])

    return (
        <section className='row'>
            <h2>{title}</h2>
            <div className="row__posters">
                {
                    moveis.map(movie => (
                        ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
                            <img className={`row__poster ${isLargeRow && "row__posterLarge"}`} key={movie.id} src={`https://image.tmdb.org/t/p/original/${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                        )
                    ))
                }
            </div>
        </section>
    );
};

export default Row;