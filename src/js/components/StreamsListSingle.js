import React from "react";
import { GridTile } from "material-ui/GridList";
import RemoveRedEye from "material-ui/svg-icons/image/remove-red-eye";
//import styles     from '../../css/StreamsListSingle.css';

const styles = {
  root: {
    color:        'white',
    paddingRight: '25px',
    paddingLeft:  '5px'
  },
  tile: {
    boxShadow: '2px 2px 2px black'
  }
};

const StreamsListSingle = props => {
  const { preview, game, channel, viewers } = props;
  const { name } = channel;
  return (
    <GridTile
      style={styles.tile}
      titleBackground="linear-gradient(
        to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%
      )"
      title={name}
      subtitle={<span>play <b>{game}</b></span>}
      actionIcon={
        <div>
          <RemoveRedEye color="white"/>
          <span style={styles.root}>{viewers}</span>
        </div>
      }>
      <img src={preview.medium} alt={name} />
    </GridTile>
  );
};

export default StreamsListSingle;
