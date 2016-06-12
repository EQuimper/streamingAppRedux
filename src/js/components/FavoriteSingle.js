import React from 'react';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import { ListItem } from 'material-ui/List';

const styles = {
    item: {
        padding: '20px 10px 30px 83px'
    }
};

const FavoriteSingle = ({ game }) => {
    const { name, logo } = game;
    const { medium } = logo;
    return (
        <div>
            <ListItem leftAvatar={<Avatar size={50} src={medium} />} primaryText={name} style={styles.item} />
            <Divider />
        </div>
    );
};

export default FavoriteSingle;
