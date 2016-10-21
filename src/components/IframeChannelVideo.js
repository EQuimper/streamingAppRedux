import React from "react";

const IframeChannelVideo = ({ name }) => (

  <iframe src={`https://player.twitch.tv/?channel=${name}/v/70396220`}
          frameBorder="0"
          scrolling="no"
          height="378"
          width="620"
          allowFullScreen>
  </iframe>

);

export default IframeChannelVideo;
