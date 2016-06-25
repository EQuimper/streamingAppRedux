import React, { PropTypes } from "react";
import { Link } from "react-router";
import { Card, CardMedia, CardText } from "material-ui/Card";
import { List, ListItem } from "material-ui/List";
import Divider from "material-ui/Divider";
import Favorite from "material-ui/svg-icons/action/favorite";
import Face from "material-ui/svg-icons/action/face";
import Video from "material-ui/svg-icons/av/video-library";
//import styles                                  from '../../css/StreamCard.css';

const styles = {
  card: {
    width:  '100%',
    height: 'auto'
  },
  img:  {
    minWidth: '80%',
    maxWidth: '80%',
    margin:   '20px 25px 0'
  },
  list: {
    textAlign: 'center'
  },
  link: {
    textDecoration: 'none'
  }
};

const StreamCard = ({ stream }) => {
  const { logo, display_name, game, followers, views, name, mature } = stream;
  const imgMature = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/ESRB_2013_Mature.svg/2000px-ESRB_2013_Mature.svg.png';
  return (
    <Card style={styles.card}>
      <CardMedia>
        <img style={styles.img} src={logo} alt={`${display_name}_Logo`} />
      </CardMedia>
      <CardText>
        <List style={styles.list}>
          <ListItem disabled
                    primaryText={
                      <p>{display_name}</p>
                    } />
          <Divider />
          <ListItem disabled
                    primaryText={
                      <p>{`Play: ${game}`}</p>
                    } />
          <Divider />
          <ListItem disabled
                    primaryText={
                      <Favorite />
                    }
                    secondaryText={
                      <p>{`Followers: ${followers}`}</p>
                    } />
          <Divider />
          <ListItem disabled
                    primaryText={
                      <Face />
                    }
                    secondaryText={
                      <p>{`Total Viewers: ${views}`}</p>
                    } />
          <Divider />
          {mature === true ?
            <ListItem disabled
                      primaryText={
                        <div>
                          <img src={imgMature} alt="Mature Content" height="70" width="70" />
                        </div>
                      } /> : null }
          <Divider />
          <Link style={styles.link} to={`/streams/${name}/videos`} params={{name}} key={`${name}_VIDEOS`}>
            <ListItem primaryText={
                        <Video />
                      }
                      secondaryText={
                        <p>{`See ${display_name} Videos ?`}</p>
                      } />
          </Link>
        </List>
      </CardText>
    </Card>
  );

};

const { object } = PropTypes;

StreamCard.propTypes = {
  stream: object.isRequired
};

export default StreamCard;
