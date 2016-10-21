import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { bindActionCreators } from "redux";
import store, { history } from "../store/configureStore";
import * as routeActions from "../actions/routeActions";
import App from "../containers/App";
import StreamsApp from "../containers/StreamsApp";
import FeaturedApp from "../containers/FeaturedApp";
import Home from "../components/layout/Home";
import Games from "../containers/Games";
import StreamSingle from "../containers/StreamSingle";
import ChannelVideos from "../components/ChannelVideos";
import FavoritesList from "../containers/FavoritesApp";

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
      <Route path={"featured"} component={FeaturedApp} onEnter={boundRouteActions.boundAllFeatured} />
      <Route path={"streams/:name"}>
        <IndexRoute
          onEnter={boundRouteActions.boundOneStream}
          component={StreamSingle} />
        <Route path={"videos"}
               component={ChannelVideos}
               onEnter={boundRouteActions.boundAllVideosFromChannel} />
      </Route>
      <Route path={"favorites"} component={FavoritesList} />
      <Route path="*" component={Home} />
    </Route>
  </Router>

);
