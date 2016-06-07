import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { bindActionCreators } from 'redux';
/*>>>>>>=============================================<<<<<<*/

import { history } from '../store/configureStore';
import store from '../store/configureStore';
import * as routeActions from '../actions/routeActions';
/*>>>>>>=============================================<<<<<<*/

import App from '../containers/App';
import StreamsApp from '../containers/StreamsApp';
/*>>>>>>=============================================<<<<<<*/

import Home from '../components/layout/Home';
import Games from '../containers/Games';
import NoMatch from '../components/layout/NoMatch';
import StreamSingle from '../containers/StreamSingle.js';
import ChannelVideos from '../components/ChannelVideos';
/*>>>>>>=============================================<<<<<<*/

const boundRouteActions = bindActionCreators(routeActions, store.dispatch);

export default (
    <Router history={history}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="games">
                <IndexRoute component={Games} onEnter={boundRouteActions.boundAllGames} />
                <Route path=":game">
                    <IndexRoute
                        component={StreamsApp}
                        onEnter={boundRouteActions.boundAllStreams} />
                </Route>
            </Route>
            <Route path={"streams/:name"}>
                <IndexRoute
                    onEnter={boundRouteActions.boundOneStream}
                    component={StreamSingle} />
                <Route
                    path={"videos"}
                    component={ChannelVideos}
                    onEnter={boundRouteActions.boundAllVideosFromChannel} />
            </Route>
            <Route path="*" component={Home} />
        </Route>
    </Router>
);
