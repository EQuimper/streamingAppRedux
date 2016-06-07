import React from 'react';
/*>>>>>>=============================================<<<<<<*/

const styles = {
    video: {
        boxShadow: 'rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px'
    }
};

const IframeVideo = ({ name }) => (
    <iframe
        style={styles.video}
        src={`https://player.twitch.tv/?channel=${name}`}
        frameborder="0"
        scrolling="no"
        height="378"
        width="620"
        allowFullScreen>
    </iframe>
);

export default IframeVideo;
