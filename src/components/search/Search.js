import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import myService from '../../services/myService';
import { searchingData } from '../../actions/searchActions';
import './searchStyle.css';

class Search extends Component {

    static propTypes = {
        searchingData: PropTypes.func.isRequired,
        results: PropTypes.array.isRequired,
    }

    constructor(props) {
        super(props);
        this._onChange = this._onChange.bind(this);
    }

    async _onChange(event) {
        await this.props.searchingData(event.target.value);
    }

    render() {
        return (
            <div>
                <div className="pb-search">
                    <div className="wrapper">
                        <i className="fa fa-search"></i>
                        <input className="pb" type="search" placeholder="Buscar" onChange={this._onChange}></input>
                    </div>
                </div>
                <div className="pb-result-search">
                    {this.props.results.length > 0 && this.props.results.map(movie => (
                        // `movie/${movie.id}
                        <Link to={`movie/${movie.id}`} key={movie.id}>
                            <div className="movie-result" >
                                <div className="wrapper">
                                    <img src={myService.imagesUrl92 + movie.poster_path}></img>
                                    <div className="inline">
                                        <p><strong>{movie.original_title}</strong></p>
                                        <p>{movie.release_date ? new Date(movie.release_date).getFullYear() : 'Not provided'}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ searchReducer }) => {
    const { results } = searchReducer;
    return {
        results,
    }
}

export default connect(mapStateToProps, {
    searchingData,
})(Search);