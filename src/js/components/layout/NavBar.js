import React, { Component } from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
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
        marginTop: '20px'
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
                    style={styles.leftMenu}
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
                    <MenuItem>Your Account</MenuItem>
                    <MenuItem>Following</MenuItem>

                </Drawer>
            </div>
        );
    }
};


