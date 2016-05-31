import React from 'react';
import Radium from 'radium';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
/*>>>>>>=============================================<<<<<<*/

const StreamsListSingle = (props) => {
	const {
		preview,
		_id,
		game,
		channel
	} = props;
	return (
		<img src={preview.medium} alt=""/>
	);
};

export default Radium(StreamsListSingle);

const styles = {
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around'
	},
	gridList: {
		width: 600,
		height: 600,
		overflowY: 'auto',
		marginBottom: 24
	}
};
