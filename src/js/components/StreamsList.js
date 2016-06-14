import React, { PropTypes } from "react";
import { Link } from "react-router";
import { GridList } from "material-ui/GridList";
import StreamsListSingle from "./StreamsListSingle";
//import styles             from '../../css/StreamsList.css';
/*>>>>>>=============================================<<<<<<*/

const styles = {
  root:     {
    display:        'flex',
    flexWrap:       'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    width:  '100%',
    height: 'auto',
    margin: '-20px'
  }
};

const StreamsList = ({ streams }) => (

  <div style={styles.root}>
    <h1>{streams[ 0 ].game}</h1>
    <GridList cellHeigth={250}
              cols={4}
              style={styles.gridList}>
      {streams.map((stream) => (
        <Link to={`/streams/${stream.channel.name}`}
              key={`${stream._id}_Link`}
              params={{name: stream.channel.name}}>
          <StreamsListSingle key={stream._id} {...stream} />
        </Link>
      ))}
    </GridList>
  </div>

);

const { array } = PropTypes;

StreamsList.propTypes = {
  streams: array.isRequired
};

export default StreamsList;
