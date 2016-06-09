import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Avatar from 'material-ui/Avatar';
import ParallaxComponent from 'react-parallax-component';
/*>>>>>>=============================================<<<<<<*/

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
    },
    paralax: {
        zIndex: '-1'
    }
};

const StreamSingle = ({ stream, err, isFetched }) => {
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
        const { status, name, logo } = stream;
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
};

const mapStateToProps = (state) => state.stream;

export default connect(mapStateToProps)(StreamSingle);
