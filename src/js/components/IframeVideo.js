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

//<a href="https://www.twitch.tv/gosugamers?tt_medium=live_embed&tt_content=text_link" style="padding:2px 0px 4px; display:block; width:345px; font-weight:normal; font-size:10px;text-decoration:underline;">Watch live video from GosuGamers on www.twitch.tv</a>
