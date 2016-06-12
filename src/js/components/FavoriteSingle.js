import React, { Component } from 'react';
import { Link } from 'react-router';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import { ListItem } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import Cancel from 'material-ui/svg-icons/navigation/cancel';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Eye from 'material-ui/svg-icons/image/remove-red-eye';
import { purple800 } from 'material-ui/styles/colors';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import { toastr } from 'react-redux-toastr';

const styles = {
    list: {
        padding: '25px 16px 10px 80px'
    },
    item: {
        padding: '20px 10px 30px 0'
    },
    link: {
        textDecoration: 'none'
    },
    icon: {
        margin: '0 10px -5px'
    }
};

const iconButtonElement = (
    <IconButton
        touch={true}
        tooltip="More"
        tooltipPosition="bottom-left"
    >
        <MoreVertIcon color={purple800} />
    </IconButton>
);

class FavoriteSingle extends Component {

    constructor(props) {
        super(props);
    }

    removeFavorite(gameId) {
        this.props.actions.removeGameFromListFavorite(gameId);
        toastr.error('Game remove from your favorite!');
    }

    render() {
        const { game } = this.props;
        const { name, box } = game;
        const { medium } = box;
        const rightIconMenu = (
            <IconMenu iconButtonElement={iconButtonElement}>
                <Link to={`/games/${name}`} style={styles.link}><MenuItem>See <Eye
                    style={styles.icon} /></MenuItem></Link>
                <MenuItem onClick={this.removeFavorite.bind(this, game._id)}>Delete <Cancel
                    style={styles.icon} /></MenuItem>
            </IconMenu>
        );
        return (
            <div>
                <ListItem leftAvatar={<Avatar size={60} src={medium} />}
                          rightIconButton={rightIconMenu}
                          primaryText={name}
                          primaryTextStyle={{marginRight: '30px'}}
                          style={styles.item} />
                <Divider />
            </div>
        );
    }
}

export default FavoriteSingle;
