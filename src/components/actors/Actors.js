import React, { Component } from 'react';
import Slider from 'react-slick';
import myService from '../../services/myService';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

const imagesPath = (key, gender) => {
    if (key) {
        return myService.imagesUrl342 + key;
    } else {
        return gender == 1 ? "https://sbxcloud.com/www/mytest/avatar-woman.png" :
            "https://sbxcloud.com/www/mytest/avatar-man.png";
    }
}

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
}

const Actors = ({ datum }) => (
    <div className="md-content-elenco">
        <div className="wrapper">
            <p className="bold-title">Elenco principal</p>
            <Slider {...settings}>
                {datum.credits && datum.credits.cast.map(actor => (
                    <div
                        key={actor.id}
                        className="md-list-actors">
                        <img src={imagesPath(actor.profile_path, actor.gender)}>
                        </img>
                        <div>
                            <p className="md-list-actors--name">{actor.name}</p>
                            <p className="md-list-actors--movie-name">{actor.character}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    </div>
)




export default Actors;