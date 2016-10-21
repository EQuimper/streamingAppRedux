import React, { PropTypes } from "react";
import { connect } from "react-redux";
import CircularProgress from "material-ui/CircularProgress";
import VideosList from "./VideosList";
/*>>>>>>=============================================<<<<<<*/

const { bool } = PropTypes;

const styles = {
  circle: {
    left: '45%',
    top:  '250px'
  }
};

const ChannelVideos = ({ videos, err, isFetched }) => {
 
  if (!isFetched) {

    return <CircularProgress style={styles.circle} size={2} />;

  } else if (videos.length === 0) {

    return <h1>This user have no video!!!</h1>;

  } else if (err === null) {

    return (
      <div>
        <VideosList videos={videos} />
      </div>
    );

  } else {
    return <h1>Videos not found</h1>;
  }

};

const mapStateToProps = (state) => state.videos;

ChannelVideos.propTypes = {
  err:       bool,
  isFetched: bool
};

export default connect(mapStateToProps)(ChannelVideos);
