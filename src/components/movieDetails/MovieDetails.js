import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as globalTypes from '../../const';
import MovieTop from '../movieTop/MovieTop';
import Actors from '../actors/Actors';
import Data from '../data/Data';
import { loadingDatumDetails } from '../../actions/movieDetailsActions';
import './MovieDetailsStyle.css';

class MovieDetails extends Component {

    static propTypes = {
        loadingDatumDetails: PropTypes.func.isRequired,
        datum: PropTypes.object.isRequired,
    }

    async componentWillMount() {
        await this.props.loadingDatumDetails(this.props.match.params.id);
    }

    render() {
        return (
            <div className="md-content">
                <MovieTop datum={this.props.datum} />
                <Actors datum={this.props.datum} />
                <Data datum={this.props.datum} />
            </div>
        );
    }
}

const mapStateToProps = ({ movieDetailsReducer }) => {
    const { datum } = movieDetailsReducer;
    return {
        datum,
    }
}

export default connect(mapStateToProps, {
    loadingDatumDetails,
})(MovieDetails);