import React from 'react';
/*>>>>>>=============================================<<<<<<*/

const styles = {
    video: {
        boxShadow: '2px 2px 2px'
    }
}

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
