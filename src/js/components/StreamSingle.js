import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import CircularProgress from 'material-ui/CircularProgress';
import Favorite from 'material-ui/svg-icons/action/favorite';
import Face from 'material-ui/svg-icons/action/face';
import IconButton from 'material-ui/IconButton';
import Video from 'material-ui/svg-icons/av/video-library';
import Avatar from 'material-ui/Avatar';
/*>>>>>>=============================================<<<<<<*/

import TwitchChat from './TwitchChat.js';
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
    }
};

const StreamSingle = ({ stream, err, isFetched }) => {
    let mature;
    if (!isFetched) {
        return <CircularProgress style={styles.circle} size={2}/>;
    } else if (err === null) {
        // Create a default logo if null
        if (stream.logo === null) {
            stream.logo = 'http://www.artifacting.com/blog/wp-content/uploads/2010/11/Deadpool-150x127.png';
        }
        if (stream.mature === true) {
            mature = <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/ESRB_2013_Mature.svg/2000px-ESRB_2013_Mature.svg.png"
                alt="Mature Contnet" height="70" width="70" />;
        }
        const { status, display_name, name, game, logo, followers, views, videos } = stream;
        return (
            <div>
                <h3>{status}</h3>
                {mature}
                <br/>
                <div>
                    <h5>Want to see more video from {display_name}</h5>
                    <Link to={`/streams/channel/${name}/videos`} params={{name}}>
                        <IconButton style={styles.iconVideo}>
                            <Video style={styles.video} />
                        </IconButton>
                    </Link>
                </div>
                <br />
                <Avatar
                    src={logo}
                    size={60}
                />
                <p><span style={styles.name}><em>{display_name}</em></span> playing <b>{game}</b></p>
                <br/>
                <iframe
                    src={`https://player.twitch.tv/?channel=${name}`}
                    frameborder="0"
                    scrolling="no"
                    height="378"
                    width="620"
                    allowFullScreen>
                </iframe>
                <TwitchChat name={name} />
                <Favorite color="red" /> <b>{followers}</b>
                <Face /> <b>{views}</b>
            </div>
        );
    } else {
        return <h1>Stream not find !!!</h1>;
    }
};

const mapStateToProps = (state) => state.stream;

export default connect(mapStateToProps)(StreamSingle);
