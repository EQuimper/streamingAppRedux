import React from "react";
import { Link } from "react-router";
import { GridList } from "material-ui/GridList";
import FeaturedListSingle from "./FeaturedListSingle";

const styles = {
  root:     {
    display:        'flex',
    flexWrap:       'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    margin: '25px',
    width:  '90%',
    height: 'auto'
  }
};

const FeaturedList = ({ featured }) => (

  <div style={styles.root}>
    <h1>Featured Video</h1>
    <GridList
      cellHeigth={500}
      cols={4}
      style={styles.gridList}>
      {featured.map((feature) => {
        return (
          <Link
            to={`/streams/${feature.stream.channel.name}`}
            key={`${feature.stream._id}_Link`}
            params={{name: feature.stream.channel.name}}>
            <FeaturedListSingle key={feature.stream._id} {...feature} />
          </Link>
        );
      })}
    </GridList>
  </div>

);

export default FeaturedList;
