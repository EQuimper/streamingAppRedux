import React from "react";
import { connect } from "react-redux";
import LoadingCircular from "../components/layout/LoadingCircular";
import FeaturedList from "../components/FeaturedList";

const FeaturedApp = ({ featured, err, isFetched }) => {

  if (!isFetched) {
    return <LoadingCircular />;
  } else if (err === null) {
    return (
      <div>
        <FeaturedList featured={featured} />
      </div>
    );
  } else {
    return <h1>Cannot find it !!!</h1>;
  }

};

const mapStateToProps = (state) => state.featured;

export default connect(mapStateToProps)(FeaturedApp);
