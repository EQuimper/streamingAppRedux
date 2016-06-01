import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
/*>>>>>>=============================================<<<<<<*/

export default class Video extends Component {
    constructor() {
        super();
        this.state = {
            expanded: false
        };
    }

    handleExpandChange = (expanded) => {
        this.setState({ expanded: expanded });
    };

    render() {
        const { title, game, preview } = this.props;
        return (
            <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
                <CardHeader
                    title={title}
                    subtitle={`Game: ${game}`}
                    avatar={preview}
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardText>

                </CardText>
                <CardMedia
                    expandable={true}
                    overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                >
                    <img src="http://lorempixel.com/600/337/nature/" />
                </CardMedia>
                <CardTitle title="Card title" subtitle="Card subtitle" expandable={true} />
                <CardText expandable={true}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions>
                    <FlatButton label="Expand" onTouchTap={this.handleExpand} />
                    <FlatButton label="Reduce" onTouchTap={this.handleReduce} />
                </CardActions>
            </Card>
        );
    }
}
