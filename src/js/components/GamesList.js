import React from 'react';
import { Link } from 'react-router';
//import styles from '../../css/GamesList.css';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
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
        boxShadow: 'rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px'
    },
    views: {
        color: 'white'
    }
};

const GamesList = ({ games }) => (
    <div style={styles.root}>
        <GridList
            cellHeight={400}
            cols={4}
            style={styles.gridList}>
            {games.map((game) => {
                const { viewers } = game;
                const { name, _id, box } = game.game;
                return (
                    <Link
                        params={{ game: name }}
                        key={`${_id}_Link`}
                        to={`/games/${name}`}>
                        <GridTile
                            style={styles.tile}
                            title={name}
                            key={_id}
                            subtitle={<div><h3>{`${viewers} Viewers`}</h3></div>}
                            actionIcon={<IconButton><StarBorder color="white" /></IconButton>}>
                            <img src={box.large} alt={`${name}_IMG`} />
                        </GridTile>
                    </Link>
                );
            })}
        </GridList>
    </div>
);

export default GamesList;
