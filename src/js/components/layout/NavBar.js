import React from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
/*>>>>>>=============================================<<<<<<*/
export default () => (
    <AppBar
        title="TITLE HERE"
        zDepth={2}
        iconElementRight={
            <Link to="/streams">Streams</Link>
        }
        />
);
