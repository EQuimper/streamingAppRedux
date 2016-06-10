import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
//import styles from '../../css/GamesList.css';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { toastr } from 'react-redux-toastr';
import Star from 'material-ui/svg-icons/toggle/star';
import * as favoriteActions from '../actions/gameActions';
/*>>>>>>=============================================<<<<<<*/

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginTop: '30px'
    },
    gridList: {
        width: '90%',
        height: 'auto',
        marginBottom: 26
    },
    tile: {
        boxShadow: '2px 2px 2px black'
    },
    views: {
        color: 'white'
    },
    img: {
        width: '100%'
    }
};

class GamesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            favorite: []
        };
    }

    //handleClick = (index) => {
    //    let game = this.props.games.filter((game, i) => {
    //        return index == i;
    //    });
    //
    //    console.log('Click on', game);
    //    this.setState({
    //
    //    });
    //    if (this.state.gameFavorite == false) {
    //        toastr.success('Game add in your favorites');
    //    } else {
    //        toastr.info('Game removed from your favorites');
    //    }
    //};

    removeFavorite(_id) {
        this.props.actions.removeGameFromFavorite(_id);
        toastr.error('Game remove from your favorite!');
    }

    addFavorite(_id) {
        this.props.actions.addGameToFavorite(_id);
        toastr.success('Game add to your favorite!');
    }

    render() {
        const { games, actions } = this.props;
        console.log(actions);
        //const { favoriteActions } = actions;
        //console.log(favoriteActions);
        return (
            <div style={styles.root}>
                <GridList
                    cellHeight={400}
                    cols={4}
                    style={styles.gridList}>
                    {games.map((game, i) => {
                        const { viewers } = game;
                        const { name, _id, box } = game.game;
                        //let boundClick = this.handleClick.bind(this, i);
                        return (
                            <GridTile
                                style={styles.tile}
                                title={name}
                                ref={i}
                                key={_id}
                                subtitle={<div><h3>{`${viewers} Viewers`}</h3></div>}
                                actionIcon={
                                    this.props.favorite.indexOf(_id) > -1 ?
                                        <IconButton onClick={this.removeFavorite.bind(this, _id)}><Star color="yellow" /></IconButton> :
                                        <IconButton onClick={this.addFavorite.bind(this, _id)}><StarBorder color="white" /></IconButton>}
                            >


                                <Link
                                    params={{ game: name }}
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

const mapState = (state) => ({ favorite: state.favorite});
const mapDispatch = (dispatch) => ({ actions: bindActionCreators(favoriteActions, dispatch) });

export default connect(mapState, mapDispatch)(GamesList);
