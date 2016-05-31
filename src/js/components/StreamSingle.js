import React from 'react';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
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
        const { status, display_name, name, game, logo } = stream;
        return (
            <div>
                <h3>{status}</h3>
                <br/>
                <img src={logo} alt={`${display_name}_Logo`} width="60" height="60"/>
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
                <iframe
                    src={`https://www.twitch.tv/${name}/chat?popout=`}
                    frameborder="0"
                    scrolling="no"
                    height="500"
                    width="350"></iframe>
            </div>
        );
    } else {
        return <h1>Stream not find !!!</h1>;
    }
};

const mapStateToProps = (state) => state.stream;

export default connect(mapStateToProps)(StreamSingle);
