import React from 'react';
/*>>>>>>=============================================<<<<<<*/

import Video from './Video';
/*>>>>>>=============================================<<<<<<*/

const VideosList = ({ videos }) => (
    <div>
        <h1><b>{videos[ 0 ].channel.display_name}</b> Channel</h1>
        {videos.map((video) => {
            return (
                <div key={video._id}>
                    <Video {...video} />
                </div>
            );
        })}
    </div>
);

export default VideosList;
