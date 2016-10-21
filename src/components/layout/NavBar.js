import React, { Component } from "react";
import { Link, browserHistory } from "react-router";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui/svg-icons/navigation/menu";
import Drawer from "material-ui/Drawer";
import Account from "material-ui/svg-icons/action/account-circle";
import MenuItem from "material-ui/MenuItem";
import Favorite from "material-ui/svg-icons/action/favorite";
import Build from "material-ui/svg-icons/action/build";
import Game from "material-ui/svg-icons/hardware/gamepad";
import Divider from "material-ui/Divider";
import Channel from "material-ui/svg-icons/av/videocam";
import Video from "material-ui/svg-icons/av/video-library";
import Avatar from "material-ui/Avatar";

const styles = {
  leftMenu: {
    textAlign: 'center'
  },
  avatar:   {
    marginTop: '20px',
    textAlign: 'center'
  },
  link:     {
    textDecoration: 'none'
  },
  brand:    {
    textDecoration: 'none',
    color:          'white'
  }
};

export default class NavBar extends Component {

  constructor(props) {
    super(props);

    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  render() {

    return (
      <div>
        <AppBar
          title={<Link to="/" style={styles.brand}>GameStreaming</Link>}
          zDepth={5}
          iconElementLeft={
                        <IconButton onTouchTap={this.handleToggle}>
                            <MenuIcon />
                        </IconButton>
                    }
        />
        <Drawer
          docked={false}
          width={250}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open: false})}
        >
          <MenuItem style={styles.avatar} disabled>
            <Avatar
              size={80}
              src='https://c1.staticflickr.com/5/4012/5126739463_e5598d33fb.jpg' />
          </MenuItem>
          <MenuItem leftIcon={<Account />} primaryText="My Account" />
          <MenuItem
            style={styles.link}
            onClick={this.handleClose}
            leftIcon={<Favorite />}
            onTouchTap={() => browserHistory.push('/favorites')}
            primaryText="Following"
          />
          <MenuItem
            style={styles.link}
            onTouchTap={() => browserHistory.push('/games')}
            onClick={this.handleClose}
            leftIcon={<Game />} primaryText="All Games"
          />
          <MenuItem
            onClick={this.handleClose}
            style={styles.link}
            onTouchTap={() => browserHistory.push('/featured')}
            leftIcon={<Channel />} primaryText="Featured Channels"
          />
          <MenuItem leftIcon={<Video />} primaryText="Top Videos" />
          <Divider />
          <MenuItem disabled primaryText="Recommended Channels" />
          <MenuItem
            style={styles.link}
            onTouchTap={() => browserHistory.push('/streams/trick2g')}
            onClick={this.handleClose}
            leftIcon={<Avatar size={30}
            src="https://static-cdn.jtvnw.net/jtv_user_pictures/trick2g-profile_image-291046f75304f006-300x300.jpeg"/>}
            primaryText="Trick2G"
          />
          <MenuItem
            style={styles.link}
            onTouchTap={() => browserHistory.push('/streams/nightblue3')}
            onClick={this.handleClose}
            leftIcon={<Avatar size={30}
            src="https://static-cdn.jtvnw.net/jtv_user_pictures/nightblue3-profile_image-be8a5ea2b11d7f12-300x300.png"/>}
            primaryText="NighBlue3"
          />
          <MenuItem
            onTouchTap={this.handleClose}
            style={styles.link}
            onClick={() => browserHistory.push('/streams/imaqtpie')}
            leftIcon={<Avatar size={30}
            src="https://static-cdn.jtvnw.net/jtv_user_pictures/imaqtpie-profile_image-8efb10b7bed60d76-300x300.jpeg"/>}
            primaryText="imaqtpie"
          />
          <Divider />
          <MenuItem style={styles.leftMenu} disabled primaryText="More" />
          <MenuItem leftIcon={<Build />} primaryText="Settings" />
        </Drawer>
      </div>
    );

  }

};
