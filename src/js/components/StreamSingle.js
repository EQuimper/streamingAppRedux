import React from 'react';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import Favorite from 'material-ui/svg-icons/action/favorite';
import Face from 'material-ui/svg-icons/action/face';
import Avatar from 'material-ui/Avatar';
/*>>>>>>=============================================<<<<<<*/

import TwitchChat from './TwitchChat.js';
/*>>>>>>=============================================<<<<<<*/

const styles = {
    circle: {
        left: '45%',
        top: '250px'
    }
};

const StreamSingle = ({ stream, err, isFetched }) => {
    if (!isFetched) {
        return <CircularProgress style={styles.circle} size={2}/>;
    } else if (err === null) {
        // Create a default logo if null
        if (stream.logo === null) {
            stream.logo = 'http://www.artifacting.com/blog/wp-content/uploads/2010/11/Deadpool-150x127.png';
        }
        const { status, display_name, name, game, logo, followers, views } = stream;
        return (
            <div>
                <h3>{status}</h3>
                <br/>
                <Avatar
                    src={logo}
                    size={60}
                />

                <p><em>{display_name}</em> playing <b>{game}</b></p>
                <br/>
                <iframe
                    src={`https://player.twitch.tv/?channel=${name}`}
                    frameborder="0"
                    scrolling="no"
                    height="378"
                    width="620"
                    allowfullscreen>
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
