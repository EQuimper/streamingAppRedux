import React, { Component } from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import Drawer from 'material-ui/Drawer';
import Account from 'material-ui/svg-icons/action/account-circle';
import MenuItem from 'material-ui/MenuItem';
import Favorite from 'material-ui/svg-icons/action/favorite';
import Build from 'material-ui/svg-icons/action/build';
import Game from 'material-ui/svg-icons/hardware/gamepad';
import Divider from 'material-ui/Divider';
import Channel from 'material-ui/svg-icons/av/videocam';
import Video from 'material-ui/svg-icons/av/video-library';
import Avatar from 'material-ui/Avatar';

/*>>>>>>=============================================<<<<<<*/

const styles = {
    base: {
        backgroundColor: '#EB524A'
    },
    leftMenu: {
        textAlign: 'center'
    },
    avatar: {
        marginTop: '20px',
        textAlign: 'center'
    },
    link: {
        textDecoration: 'none'
    }
};

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    handleToggle = () => this.setState({ open: !this.state.open });

    render() {
        return (
            <div>
                <AppBar
                    style={styles.base}
                    title="TITLE HERE"
                    zDepth={2}
                    iconElementLeft={
                        <IconButton onTouchTap={this.handleToggle}>
                            <MenuIcon />
                        </IconButton>
                    }
                    iconElementRight={
                        <Link to="/streams">Streams</Link>
                    }
                />
                <Drawer
                    docked={false}
                    width={225}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}
                >
                    <MenuItem style={styles.avatar} disabled>
                        <Avatar
                            size={70}
                            src='https://c1.staticflickr.com/5/4012/5126739463_e5598d33fb.jpg' />
                    </MenuItem>
                    <MenuItem leftIcon={<Account />} primaryText="My Account" />
                    <MenuItem leftIcon={<Favorite />} primaryText="Following" />
                    <Link to={'/games'} style={styles.link}>
                        <MenuItem leftIcon={<Game />} primaryText="Games" />
                    </Link>
                    <MenuItem leftIcon={<Channel />} primaryText="Top Channels" />
                    <MenuItem leftIcon={<Video />} primaryText="Top Videos" />
                    <Divider />
                    <MenuItem disabled primaryText="Recommended Channels" />
                    <MenuItem
                        leftIcon={<Avatar size={30} src="https://static-cdn.jtvnw.net/jtv_user_pictures/trick2g-profile_image-291046f75304f006-300x300.jpeg"/>}
                        primaryText="Trick2G" />
                    <MenuItem
                        leftIcon={<Avatar size={30} src="https://static-cdn.jtvnw.net/jtv_user_pictures/nightblue3-profile_image-be8a5ea2b11d7f12-300x300.png"/>}
                        primaryText="NighBlue3" />
                    <MenuItem leftIcon={<Avatar />} primaryText="KraftCoding" />
                    <Divider />
                    <MenuItem style={styles.leftMenu} disabled primaryText="More" />
                    <MenuItem leftIcon={<Build />} primaryText="Settings" />
                </Drawer>
            </div>
        );
    }
};


