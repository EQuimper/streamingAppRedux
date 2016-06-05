import React from 'react';

const IframeVideo = ({ name }) => (
    <iframe
        src={`https://player.twitch.tv/?channel=${name}`}
        frameborder="0"
        scrolling="no"
        height="378"
        width="620"
        allowFullScreen>
    </iframe>
);

export default IframeVideo;
