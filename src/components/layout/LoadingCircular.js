import React from "react";
import CircularProgress from "material-ui/CircularProgress";

const styles = {
  circle: {
    left: '45%',
    top:  '250px'
  }
};

const LoadingCircular = () => (


    <CircularProgress
              size={80}
              thickness={5}
              style={styles.circle}
            />


);

export default LoadingCircular;
