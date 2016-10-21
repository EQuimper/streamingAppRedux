import React from "react";
import { connect } from "react-redux";
import StreamsList from "../components/StreamsList";
import LoadingCircular from "../components/layout/LoadingCircular";

const StreamsApp = ({ streams, err, isFetched }) => {

  if (!isFetched) {
    return <LoadingCircular />;
  } else if (err === null) {
    return (
      <div>
        <StreamsList streams={streams} />
      </div>
    );
  } else {
    return <h1>Cannot find it !!!</h1>;
  }

};

const mapStateToProps = (state) => state.streams;

export default connect(mapStateToProps)(StreamsApp);
