import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router";
import { GridList, GridTile } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import StarBorder from "material-ui/svg-icons/toggle/star-border";
import { toastr } from "react-redux-toastr";
import Star from "material-ui/svg-icons/toggle/star";
import * as favoriteActions from "../actions/gameActions";
//import styles               from '../../css/GamesList.css';

const styles = {

  root:     {
    display:        'flex',
    flexWrap:       'wrap',
    justifyContent: 'space-around',
    marginTop:      '30px'
  },
  gridList: {
    width:        '90%',
    height:       'auto',
    marginBottom: 26
  },
  tile:     {
    boxShadow: '2px 2px 2px black'
  },
  views:    {
    color: 'white'
  },
  img:      {
    width: '100%'
  }

};

class GamesList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      gameFavorites: []
    };
  }

  removeFavorite(game) {
    this.props.actions.removeGameFromFavorite(game);
    toastr.error('Game remove from your favorite!');
  }

  addFavorite(game) {
    this.props.actions.addGameToFavorite(game);
    toastr.success('Game add to your favorite!');
  }

  render() {
    const { games } = this.props;
    return (
      <div style={styles.root}>
        <GridList
          cellHeight={400}
          cols={4}
          style={styles.gridList}>
          {games.map((game, i) => {
            const { viewers } = game;
            const { name, _id, box } = game.game;
            return (
              <GridTile style={styles.tile}
                        title={name}
                        ref={i}
                        key={_id}
                        subtitle={<div><h3>{`${viewers} Viewers`}</h3></div>}
                        actionIcon={ this.props.gameFavorites.find((info) => info.game._id === _id) ?
                          <IconButton onClick={this.removeFavorite.bind(this, game)}><Star color="yellow" /></IconButton> :
                            <IconButton onClick={this.addFavorite.bind(this, game)}><StarBorder color="white" /></IconButton>}>
                <Link
                      key={`${_id}_Link`}
                      to={`/games/${name}`}>
                  <img src={box.large} alt={`${name}_IMG`} style={styles.img} />
                </Link>
              </GridTile>
            );
          })}
        </GridList>
      </div>
    );
  }
}

const mapState = (state) => ({ gameFavorites: state.gameFavorites });

const mapDispatch = (dispatch) => ({ actions: bindActionCreators(favoriteActions, dispatch) });

export default connect(mapState, mapDispatch)(GamesList);
