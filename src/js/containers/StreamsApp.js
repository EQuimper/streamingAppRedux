import React from 'react';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
/*>>>>>>=============================================<<<<<<*/

import StreamsList from '../components/StreamsList';
/*>>>>>>=============================================<<<<<<*/

const styles = {
    circle: {
        left: '45%',
        top: '250px'
    }
};

const StreamsApp = ({ streams, err, isFetched }) => {
    if (!isFetched) {
        return <CircularProgress style={styles.circle} size={2}/>;
    } else if (err === null) {
        return (
            <div>
                <StreamsList streams={streams}/>
            </div>
        );
    } else {
        return <h1>Cannot find it !!!</h1>;
        }
    };

const mapStateToProps = (state) => state.streams;

/*>>>>>>=============================================<<<<<<*/

export default connect(mapStateToProps)(StreamsApp);
