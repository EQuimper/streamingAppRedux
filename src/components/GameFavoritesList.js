import React from "react";
import { List } from "material-ui/List";
import FavoriteSingle from "./FavoriteSingle";
import { Card, CardHeader, CardText } from "material-ui/Card";

const styles = {
  card: {
    width: '45%'
  }
};

const FavoritesList = ({ gameFavorites, actions }) => {

  if (gameFavorites.length === 0) {
    return <h1>No game liked yet!</h1>;
  }

  return (
    <Card style={styles.card}>
      <CardHeader title="Games Liked"
                  subtitle="Your list of games liked"
                  actAsExpander={true}
                  showExpandableButton={true} />
      <CardText expandable={true}>
        <List>
          {gameFavorites.map((game, i) => <FavoriteSingle key={i} {...game} actions={actions} />)}
        </List>
      </CardText>
    </Card>
  );

};

export default FavoritesList;
