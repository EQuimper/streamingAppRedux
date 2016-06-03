import React from 'react';
import { Link } from 'react-router';
import { GridList } from 'material-ui/GridList'; // http://www.material-ui.com/#/components/grid-list
/*>>>>>>=============================================<<<<<<*/

import StreamsListSingle from './StreamsListSingle';
/*>>>>>>=============================================<<<<<<*/

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    gridList: {
        width: 'max',
        height: 'auto',
        marginBottom: 25
    }
};

const StreamsList = ({ streams }) => (
    <div style={styles.root}>
        <h1>{streams[ 0 ].game}</h1>
        <GridList
            cellHeigth={250}
            cols={4}
            style={styles.gridList}>
            {streams.map((stream) => (
                <Link
                    to={`streams/channel/${stream.channel.name}`}
                    key={`${stream._id}_Link`}
                    params={{name: stream.channel.name}}>
                    <StreamsListSingle key={stream._id} {...stream} />
                </Link>
            ))}
        </GridList>
    </div>
);

export default StreamsList;
