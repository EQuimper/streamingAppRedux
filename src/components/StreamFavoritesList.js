import React from "react";
import { Card, CardHeader, CardText } from "material-ui/Card";
import { List } from "material-ui/List";
import FavoriteSingleStream from "./FavoriteSingleStream";

const styles = {
  card: {
    width: '45%'
  }
};

const StreamFavoritesList = ({ streamFavorites, actions }) => {

  if (streamFavorites.length === 0) {

    return <h1>No stream liked yet!</h1>;

  }
  return (
    <Card style={styles.card}>
      <CardHeader title="Streams Liked"
                  subtitle="Your list of streams liked"
                  actAsExpander={true}
                  showExpandableButton={true} />
      <CardText expandable={true}>
        <List>
          {streamFavorites.map((stream, i) => <FavoriteSingleStream key={i} {...stream} actions={actions} />)}
        </List>
      </CardText>
    </Card>
  );

};

export default StreamFavoritesList;
