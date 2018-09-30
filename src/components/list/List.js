import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadingData } from '../../actions/listAction';
import * as globalTypes from '../../const';
import MovieCard from '../movieCard/MovieCard';
import './listStyles.css';

class List extends Component {

    static propTypes = {
        loadingData: PropTypes.func.isRequired,
        reducerState: PropTypes.string.isRequired,
        data: PropTypes.object.isRequired,
        genres: PropTypes.array.isRequired,
    }

    async componentWillMount() {
        await this.props.loadingData();
    }

    displayData(data, genres) {
        if (this.props.reducerState === globalTypes.LOADING) {
            return (
                <div className="pb-center">
                    {
                        <i className="fa fa-spinner fa-spin fa-3x" />
                    }
                </div>
            );
        } else {
            return Object.keys(data).length > 0 && data.results.length > 0 ?
                data.results.map(datum => <MovieCard key={datum.id} datum={datum} genres={genres} />)
                : <p>"Sorry no movies were found related to these criterias"</p>;
        }
    }

    render() {
        const { data, genres } = this.props;
        return (
            <div className="list-content">
                <div className="wrapper">
                    {
                        this.displayData(data, genres)
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ listReducer, filtersReducer }) => {
    const { reducerState, data } = listReducer;
    const { genres } = filtersReducer;
    return {
        reducerState,
        data,
        genres,
    }
}

export default connect(mapStateToProps, {
    loadingData,
})(List);