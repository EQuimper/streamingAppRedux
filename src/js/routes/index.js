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
import Games from '../components/layout/Games';
import NoMatch from '../components/layout/NoMatch';
import StreamSingle from '../components/StreamSingle.js';
import ChannelVideos from '../components/ChannelVideos';
/*>>>>>>=============================================<<<<<<*/

const boundRouteActions = bindActionCreators(routeActions, store.dispatch);

export default (
    <Router history={history}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="streams">
                <IndexRoute component={StreamsApp}
                    onEnter={boundRouteActions.boundAllStreams}/>
                <Route
                    path={"channel/:name"}>
                    <IndexRoute
                        onEnter={boundRouteActions.boundOneStream}
                        component={StreamSingle} />
                    <Route
                        path={"videos"}
                        component={ChannelVideos}
                        onEnter={boundRouteActions.boundAllVideosFromChannel} />
                </Route>
            </Route>
            <Route path="games" component={Games}/>
            <Route path="*" component={NoMatch}/>
        </Route>
    </Router>
);
