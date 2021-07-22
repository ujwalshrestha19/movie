import React from 'react'
import Movies from './Movies'
import About from './About'
import { NavLink, Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Error from './Error';
import Home from './Home';
import SingleMovie from './SingleMovie/SingleMovie';
import Details from './Details/Details'

export default function RouterComponent(props) {
    return (
        <div>
            <Router>
                <div className="menu_style">
                    <NavLink activeClassName="active_class" to='/'>Home</NavLink>
                    <NavLink activeClassName="active_class" to='/movies'>Movies</NavLink>
                    <NavLink activeClassName="active_class" to='/about'>About</NavLink>

                </div>



                <div>
                    <Switch>
                        <Route exact path='/about' render={() => <About name="About passed" />} />
                        <Route exact path='/' render={() => <Home />} />
                        <Route path='/movies' render={() => <Movies name="Movies passed" />} />
                        <Route path='/single' render={() => <SingleMovie />} />
                        <Route path='/details' render={() => <Details />} />
                        <Route component={Error} />
                    </Switch>
                </div>

            </Router>

        </div>
    )
}

