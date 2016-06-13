import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import { bindActionCreators } from 'redux';
import Favorite from 'material-ui/svg-icons/action/favorite';
import FavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import { toastr } from 'react-redux-toastr';
/*>>>>>>=============================================<<<<<<*/

import * as favoriteActions from '../actions/streamActions';
import TwitchChat from '../components/TwitchChat';
import StreamCard from '../components/StreamCard';
import IframeVideo from '../components/IframeVideo';
import LoadingCircular from '../components/layout/LoadingCircular';
/*>>>>>>=============================================<<<<<<*/

const styles = {
    circle: {
        left: '45%',
        top: '250px'
    },
    name: {
        color: 'blue'
    },
    iconVideo: {
        width: 96,
        height: 96,
        padding: 24
    },
    video: {
        width: 60
    },
    title: {
        marginTop: '25px'
    },
    titleCenter: {
        textAlign: 'center'
    },
    stream: {
        marginTop: '30px'
    },
    banner: {
        width: '100%'
    }
};

class StreamSingle extends Component {

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
            const { status, name, logo, _id } = stream;
            return (
                <div className="wrap container-fluid">
                    <div className="row" style={styles.title}>
                        <div className="col-md-offset-2 col-lg-offset-2 col-md-1 col-lg-1">
                            <Avatar
                                src={logo}
                                size={60}
                            />
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <h3 style={styles.titleCenter}>{status}</h3>
                        </div>
                    </div>
                    <div className="row" style={styles.stream}>
                        <div className="col-md-offset-2 col-md-5 col-lg-offset-2 col-lg-5">
                            <IframeVideo name={name} />
                            <br />
                            {this.props.streamFavorites.find((info) => info._id === _id) ?
                                <RaisedButton label="UNFOLLOW"
                                              onClick={this.removeStreamFavorite.bind(this, _id)}
                                              labelPosition="before"
                                              backgroundColor="#69F0AE"
                                              icon={<Favorite />}
                                              style={{marginTop: '10px'}} /> :
                                <RaisedButton label="FOLLOW"
                                              onClick={this.addStreamFavorite.bind(this, stream)}
                                              labelPosition="before"
                                              primary={true}
                                              icon={<FavoriteBorder />}
                                              style={{marginTop: '10px'}} />
                            }
                            <br />
                            <TwitchChat name={name} />
                        </div>
                        <div className="col-md-offset-2 col-md-2 col-lg-offset-2 col-lg-2">
                            <StreamCard stream={stream} />
                        </div>
                    </div>
                </div>
            );
        } else {
            return <h1>Stream not find !!!</h1>;
        }
    }
}

const mapState = (state) => ({
    stream: state.stream,
    streamFavorites: state.streamFavorites
});

const mapDispatch = (dispatch) => ({ actions: bindActionCreators(favoriteActions, dispatch) });

export default connect(mapState, mapDispatch)(StreamSingle);
