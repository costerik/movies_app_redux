import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as globalTypes from '../../const';
import myService from '../../services/myService';
import './movieCardStyles.css';

const _genres = (genres, ids) => {
    let result = "";
    let max = 0;
    ids.forEach(id => {
        if (max < 2) {
            genres.forEach(genre => {
                if (genre.value === id) {
                    result += genre.label + ",";
                }
            });
            max += 1;
        }
    });
    return result.slice(0, result.length - 1);
}

const MovieCard = ({ datum, genres }) => {
    return (
        <div className="mc-content">
            <Link to={`movie/${datum.id}`}>
                <img src={myService.imagesUrl + datum.poster_path} />
            </Link>
            <div className="mc-datum-movie">
                <div>
                    <div className="title">
                        <div className="mc-start">
                            <Link to={`movie/${datum.id}`}>
                                {datum.original_title}
                            </Link>
                            <div className="average">
                                {datum.vote_average}
                                <i className="fa fa-star"></i>
                            </div>
                        </div>

                    </div>
                    <div className="year">
                        <p className="">{new Date(datum.release_date).getFullYear()}</p>
                        <p>{_genres(genres, datum.genre_ids || datum.genres.map(g => g.id))}</p>
                    </div>
                    <div className="">
                        <p className="overview">
                            {datum.overview}
                        </p>
                    </div>
                </div>
                <div className="mas-info">
                    <Link to={`movie/${datum.id}`}>Mas información</Link>
                </div>
            </div>
        </div>
    )
}

export default MovieCard;