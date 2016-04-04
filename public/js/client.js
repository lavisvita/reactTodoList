import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from './pages/Layout';
import Favorites from './pages/Favorites';
import Settings from './pages/Settings';
import Todos from './pages/Todos';
import GoodIdeas from './pages/GoodIdeas';

const app = document.getElementById('app');
ReactDom.render(
    <Router history={hashHistory}>
        <Route path='/' component={Layout}>
            <IndexRoute component={Todos}></IndexRoute>
            <Route path='favorites' component={Favorites}></Route>
            <Route path='settings' component={Settings}></Route>
            <Route path='goodideas(/:idea)' component={GoodIdeas}></Route>
        </Route>
    </Router >,
    app
);

/*
* var App = React.createClass({

 render: function() {
 return (
 <Locations hash>
 <Location path="/" handler={MainPage} />
 <Location path="/users/:username" handler={UserPage} />
 </Locations>
 )
 }
 })
* */