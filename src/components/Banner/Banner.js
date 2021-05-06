import React from 'react';
import './Banner.css';

const Banner = () => {

    function turncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }

    return (
        <header style={{ backgroundImage: `url('https://b2b-pickaboocdn.azureedge.net/media/wysiwyg/Netflix.jpg')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center center' }} className='banner'>
            <div className="banner__contents">
                <h1 className="banner__title">
                    Movie name
                </h1>
                <div className="banner__buttons">
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>My List</button>
                </div>
                <h1 className="banner__description">
                    {turncate(`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur aut nemo saepe placeat aspernatur quasi quaerat ea quis? Explicabo facere doloremque natus ab, aspernatur libero, reprehenderit culpa harum tempora placeat inventore est ipsam error? Explicabo quidem id consequatur, deleniti dolorum vero ipsa dicta! Ab, quasi sint explicabo nulla a voluptatum.`, 150)}
                </h1>
            </div>
            <div className="banner--fadeBottom" />
        </header>
    );
};

export default Banner;