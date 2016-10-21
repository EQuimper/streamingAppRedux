import React, { Component } from "react";
import { connect } from "react-redux";
import Avatar from "material-ui/Avatar";
import RaisedButton from "material-ui/RaisedButton";
import { bindActionCreators } from "redux";
import Favorite from "material-ui/svg-icons/action/favorite";
import FavoriteBorder from "material-ui/svg-icons/action/favorite-border";
import Face from "material-ui/svg-icons/action/face";
import { toastr } from "react-redux-toastr";
import * as favoriteActions from "../actions/streamActions";
import ChatIframe from "../components/TwitchChat";
import Dialog from 'material-ui/Dialog';
import StreamCard from "../components/StreamCard";
import IframeVideo from "../components/IframeVideo";
import LoadingCircular from "../components/layout/LoadingCircular";
import { purple500 } from "material-ui/styles/colors";


const styles = {
  root: {
    height: 'calc(100vh - 64px)',
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    backgroundImage:     'url(https://images.unsplash.com/10/wii.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=38ab2a46e8621c8c23f5e4f10dcc7017)',
    backgroundSize:      'cover',
    backgroundBlendMode: 'multiply',
    backgroundColor:     '#0277BD',
    alignItems: 'center'
  },
  streamTitle: {
    width: '68%',
    display: 'flex',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: '2%',
    boxShadow: 'rgba(0, 0, 0, 0.298039) 0px 19px 60px, rgba(0, 0, 0, 0.219608) 0px 15px 20px',
    borderRadius: 20,
    color: '#fff'
  },
  video: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginTop: 15
  },
  videoIframe: {
    flexBasis: '75%'
  },
  chat: {
    flexBasis: '25%'
  },
  streamAction: {
    display: 'flex',
    width: '80%',
    justifyContent: 'flex-start',
  },
  name: {
    display: 'flex',
  },
  titleContainer: {
    display: 'flex',
    width: '95%',
    justifyContent: 'space-between'
  },
  followers: {
    display: 'flex',
    alignItems: 'center',
    width: 80,
    justifyContent: 'space-between'
  }
};

const customContentStyle = {
  width: 250,
  maxWidth: 'none',
  backgroundColor: purple500
};

class StreamSingle extends Component {

  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  addStreamFavorite(stream) {
    this.props.actions.addStreamToFavorite(stream);
    toastr.success('This stream have been had to your favorite!');
  }

  removeStreamFavorite(_id) {
    this.props.actions.removeStreamToFavorite(_id);
    toastr.error('This stream have been remove from your favorite');
  }

  render() {
    const { stream, isFetched, err } = this.props.stream;
    let mature;
    if (!isFetched) {
      return <LoadingCircular />;
    } else if (err === null) {
      // Create a default logo if null
      if (stream.logo === null) {
        stream.logo = 'http://www.artifacting.com/blog/wp-content/uploads/2010/11/Deadpool-150x127.png';
      }
      if (stream.mature === true) {
        mature = <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/ESRB_2013_Mature.svg/2000px-ESRB_2013_Mature.svg.png"
          alt="Mature Content"
          height="70"
          width="70" />;
      }
      const { status, name, logo, _id, video_banner, display_name, views, followers } = stream;
      return (
        <div style={styles.root}>
          <div className="streamTitle" style={styles.streamTitle}>
            <div style={styles.titleContainer}>
              <div style={styles.name}>
                <Avatar src={logo} size={60} />
                <h3 style={{marginLeft: '1em'}}>{display_name}</h3>
              </div>
              <div>
                {/*<RaisedButton label="More Info" onTouchTap={this.handleOpen} style={{ marginRight: '5px' }} />*/}
                {this.props.streamFavorites.find((info) => info._id === _id) ?
                  <RaisedButton label="UNFOLLOW"
                                onClick={this.removeStreamFavorite.bind(this, _id)}
                                labelPosition="before"
                                backgroundColor="#69F0AE"
                                icon={<Favorite />}
                                style={{marginTop: '10px', marginLeft: '5px' }} /> :
                  <RaisedButton label="FOLLOW"
                                onClick={this.addStreamFavorite.bind(this, stream)}
                                labelPosition="before"
                                primary={true}
                                icon={<FavoriteBorder />}
                                style={{marginTop: '10px', marginLeft: '5px' }} />
                }
              </div>
              <div style={styles.followers}>
                <h4>{views}</h4> <Face color="white" />
              </div>
              <div style={styles.followers}>
                <h4>{followers}</h4> <Favorite color="white" />
              </div>
            </div>
          </div>
          <div className="video" style={styles.video}>
            <IframeVideo name={name} style={styles.videoIframe} />
            <ChatIframe name={name} style={styles.chat} />
          </div>
          <div className="streamAction" style={styles.streamAction}>
            <Dialog
              modal={true}
              contentStyle={customContentStyle}
              open={this.state.open}
            >
              <StreamCard stream={stream} />
            </Dialog>
          </div>
        </div>
      );
    } else {
      return <h1>Stream not find !!!</h1>;
    }
  }
}

const mapState = (state) => ({
  stream:          state.stream,
  streamFavorites: state.streamFavorites
});

const mapDispatch = (dispatch) => ({ actions: bindActionCreators(favoriteActions, dispatch) });

export default connect(mapState, mapDispatch)(StreamSingle);
