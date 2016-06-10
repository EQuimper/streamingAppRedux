import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
/*>>>>>>=============================================<<<<<<*/

const styles = {
    circle: {
        left: '45%',
        top: '250px'
    }
};

const LoadingCircular = () => (
    <CircularProgress style={styles.circle} size={3} color="#6A1B9A" />
);

export default LoadingCircular;
