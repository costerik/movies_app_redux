import '../ReactotronConfig';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { compose, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import Reactotron from 'reactotron-react-js';
import reducers from './reducers';
import { BrowserRouter as Router, Route, Link, browserHistory } from 'react-router-dom';
const appReducer = combineReducers({ ...reducers, });
const middleware = applyMiddleware(thunkMiddleware);
const store = Reactotron.createStore(appReducer, compose(middleware));
import PrimaryBox from './components/primaryBox/primaryBox';
import MovieDetails from './components/movieDetails/MovieDetails';
import './app.css';


export class MyApp extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <Router history={browserHistory}>
        <div>
          <header>
            <div className="wrapper">
              <h1><Link to="/"></Link></h1>
              <p className="p-title">Descubre</p>
            </div>
          </header>
          <Route exact path="/" component={PrimaryBox}/>
          <Route path="/movie/:id" component={MovieDetails}/>
          <footer>
            <h2>Footer</h2>
            <section className='footer-logos'>
              Siguenos
              <ul>
                <li><a href="#" target="_self" rel="nofollow" ><i className="fa fa-youtube fa-2x"></i></a></li>
                <li><a href="#" target="_self" rel="nofollow" ><i className="fa fa-instagram fa-2x"></i></a></li>
                <li><a href="#" target="_self" rel="nofollow" ><i className="fa fa-pinterest fa-2x"></i></a></li>
                <li><a href="#" target="_self" rel="nofollow"><i className="fa fa-twitter fa-2x"></i></a></li>
                <li><a href="#" target="_self" rel="nofollow" ><i className="fa fa-facebook fa-2x"></i></a></li>
              </ul>
            </section>

            <section className='footer-links'>
              <ul>
                <li><a href='#' target="_self">Ayuda</a></li>
                <li><a href='#' target="_self">Sobre Nosotros</a></li>
                <li><a href='#' target="_self">Contacto</a></li>
              </ul>
              <ul>
                <li><a href='#' target="_self">Términos y Condiciones</a></li>
                <li><a href='#' target="_self">Política de tratamiento de datos personales</a></li>
                <li><a href='#' target="_self">Politicas de Privacidad</a></li>
                <li><a href='#' target="_self">Peticiones quejas y reclamos</a></li>
                <li><a href='#' target="_self">SICR</a></li>
                <li><a href='#' target="_self">Responsabilidad Social</a></li>
                <li><a href='#' target="_self">Trabaja con nosotros</a></li>
              </ul>
            </section>
          </footer>

        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <MyApp />
  </Provider>
  , document.getElementById('root')
);