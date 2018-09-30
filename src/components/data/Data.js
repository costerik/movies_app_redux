import React, { Component } from 'react';
import myService from '../../services/myService';

const Globes = (data, sw) => {
    let elems;
    if (sw == 1) {
        elems = data.genres && data.genres.map(genre => {
            return (
                <li key={genre.id}> {genre.name}</li>
            )
        });
    } else {
        elems = data.keywords && data.keywords.keywords.map(k => {
            return (
                <li key={k.id}> {k.name}</li>
            )
        });
    }
    return (
        elems
    )
}
const Data = ({ datum }) => {
    let videoUrl;
    if (datum && datum.videos && datum.videos.results.length > 0) {
        videoUrl = true;
    }
    return (
        <div className="md-content">
            <div className="md-content-datos">
                <div className="wrapper">
                    <p className="bold-title">Datos</p>
                    <div>
                        <ul className="md-list-datos">
                            <li>
                                <p>Titulo original</p>
                                <p>{datum.original_title}</p>
                            </li>
                            <li>
                                <p>Estatus</p>
                                <p>{datum.status}</p>
                            </li>
                            <li>
                                <p>Lenguaje Original</p>
                                <p>{datum.original_language}</p>
                            </li>
                            <li>
                                <p>Duración</p>
                                <p>{datum.runtime} min</p>
                            </li>
                            <li>
                                <p>Presupuesto</p>
                                <p>{myService.formatter(Number(datum.budget))}</p>
                            </li>
                            <li>
                                <p>Ingresos</p>
                                <p>{myService.formatter(Number(datum.revenue))}</p>
                            </li>
                            <li>
                                <p>Web</p>
                                <p>{datum.homepage}</p>
                            </li>
                        </ul>
                    </div>
                    <p className="mc-content-datos__title--genre">Generos</p>
                    <ul className="md-globes">
                        {Globes(datum, 1)}
                    </ul>
                    <p className="mc-content-datos__title--keywords">Palabras Clave</p>
                    <ul className="md-globes">
                        {Globes(datum, 2)}
                    </ul>
                    <div className="video">
                        <p className="mc-content-datos__title--video">Trailer</p>
                        {
                            videoUrl ? <iframe src={myService.youtube + datum.videos.results[0].key}>
                            </iframe> : "No video available..."
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Data;