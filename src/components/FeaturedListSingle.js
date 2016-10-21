import React from "react";
import { GridTile } from "material-ui/GridList";

const styles = {
  root:  {
    color:        'white',
    paddingRight: '25px',
    paddingLeft:  '5px'
  },
  title: {
    boxShadow: '2px 2px 2px black'
  },
  first: {
    width: '500px'
  }
};

const FeaturedListSingle = (props) => {

  const { image, title, stream } = props;
  const { game } = stream;

  return (
    <GridTile
      style={styles.title}
      titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
      title={title}
      subtitle={<span>Game: <b>{game}</b></span>}>
      <img src={image} alt={title} />
    </GridTile>
  );

};

export default FeaturedListSingle;
