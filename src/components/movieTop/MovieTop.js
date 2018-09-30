import React, { Component } from 'react';
import myService from '../../services/myService';

const MovieTop = ({ datum }) => {
    return (
        <div id="wrapper-md-content-top">
            <div className="md-content-top">
                <div className="wrapper">
                    <img src={myService.imagesUrl342 + datum.poster_path}></img>
                    <div className="md-right">
                        <p className="md-right__title">{datum && datum.original_title}  {datum && datum.release_date ? new Date(datum.release_date).getFullYear():""}</p>
                        <p className="md-right__wrapper-percentage"><i className="md-percentage">{datum && datum.vote_average ? `${((datum.vote_average * 100)) / 10}%`:""}</i>   User score</p>
                        <p className="md-right__general">General</p>
                        <p className="md-right__overview">{datum.overview}</p>
                        <div className="md-right__director">
                            <p className="team">Equipo Destacado</p>
                            <p className="md-right__director--bottom">{datum.credits && datum.credits.crew[0].name}</p>
                            <p className="md-right__director--bottom">{datum.credits && datum.credits.crew[0].job}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieTop;