import React from "react";

const IframeVideo = ({ name }) => (

  <iframe src={`https://player.twitch.tv/?channel=${name}`}
          frameborder="0"
          scrolling="no"
          height="500"
          style={{ flexBasis: '75%' }}
          //width="900"
          allowFullScreen>
  </iframe>

);

export default IframeVideo;
