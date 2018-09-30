import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { loadingGenres, setYear, setOrder, setGenre, setKeyword } from '../../actions/filtersActions';
import { years } from '../../utils/utils';
import { orderValues } from '../../const';
import './filtersStyle.css';

class Filters extends Component {

    static propTypes = {
        loadingGenres: PropTypes.func.isRequired,
        setYear: PropTypes.func.isRequired,
        setOrder: PropTypes.func.isRequired,
        setGenre: PropTypes.func.isRequired,
        setKeyword: PropTypes.func.isRequired,
        genres: PropTypes.array.isRequired,
        year: PropTypes.object,
        genre: PropTypes.object,
        order: PropTypes.object,
        keywords: PropTypes.string,
    }

    constructor(props) {
        super(props);
        this.state = {
            years: years(),
            orderValues: orderValues,
        }
        this._setYear = this._setYear.bind(this);
        this._setOrder = this._setOrder.bind(this);
        this._setGenre = this._setGenre.bind(this);
        this._setKeyword = this._setKeyword.bind(this);
    }

    async componentWillMount() {
        await this.props.loadingGenres();
    }

    async _setYear(value) {
        await this.props.setYear(value);
    }

    async _setOrder(value) {
        await this.props.setOrder(value);
    }

    async _setGenre(value) {
        await this.props.setGenre(value);
    }

    async _setKeyword(event) {
        await this.props.setKeyword(event.target.value);
    }

    render() {
        return (
            <div className="filters-content">
                <div className="wrapper">
                    <section id="filters-section">
                        <h4>Descubre nuevas películas</h4>
                        <div className="pb-filters">
                            <label className=".pb-filters__label">Año</label>
                            <Select
                                name="year"
                                value={this.props.year}
                                onChange={this._setYear}
                                options={
                                    this.state.years
                                }
                            />
                        </div>
                        <div className="pb-filters">
                            <label className=".pb-filters__label">Ordenar por</label>
                            <Select
                                name="order"
                                value={this.props.order}
                                onChange={this._setOrder}
                                options={
                                    this.state.orderValues
                                }
                            />
                        </div>
                        <div className="pb-filters">
                            <label className=".pb-filters__label">Géneros</label>
                            <Select
                                name="genres"
                                value={this.props.genre}
                                onChange={this._setGenre}
                                options={
                                    this.props.genres
                                }
                            />
                        </div>
                        <div className="pb-filters">
                            <label className=".pb-filters__label">Palabra Clave</label>
                            <input 
                                className="pb-filters__input"
                                type="text"
                                onChange={this._setKeyword}
                                value={this.props.keywords}
                            />
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ filtersReducer }) => {
    const { year, genre, order, keywords, genres } = filtersReducer;
    return {
        year,
        genre,
        order,
        keywords,
        genres,
    }
}

export default connect(mapStateToProps, {
    loadingGenres,
    setYear,
    setOrder,
    setGenre,
    setKeyword,
})(Filters);