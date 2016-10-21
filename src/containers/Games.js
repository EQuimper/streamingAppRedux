import React from "react";
import { connect } from "react-redux";
import LoadingCircular from "../components/layout/LoadingCircular";
import GamesList from "../components/GamesList";

const Games = ({ games, err, isFetched }) => {

  console.log('error', err);
  if (!isFetched) {
    return <LoadingCircular />;
  }
  else if (err === null) {
    return (
      <div>
        <GamesList games={games} />
      </div>
    );
  } else {
    return <h1>Games not find!</h1>;
  }

};

const mapStateToProps = (state) => state.games;

export default connect(mapStateToProps)(Games);
