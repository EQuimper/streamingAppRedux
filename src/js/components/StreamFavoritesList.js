import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';

const styles = {
    card: {
        width: '40%'
    }
};

const StreamFavoritesList = () => {
    return (
        <Card style={styles.card}>
            <CardHeader title="Streams Liked" subtitle="Your list of streams liked" actAsExpander={true}
                        showExpandableButton={true} />
            <CardText expandable={true}>
            </CardText>
        </Card>
    );
};

export default StreamFavoritesList;
