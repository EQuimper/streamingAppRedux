import React from 'react';
import { GridList } from 'material-ui/GridList';
/*>>>>>>=============================================<<<<<<*/
import StreamsListSingle from './StreamsListSingle';
/*>>>>>>=============================================<<<<<<*/

const StreamsList = ({ streams }) => {
	console.log(streams);
	let streamArray = [];
	if (streams) {
		return (
			<GridList
				cellHeigth={200}
				cols={4}
				style={styles.gridList}>
				{streams.map((stream) => <StreamsListSingle key={stream._id} {...stream} />)}
			</GridList>
		);
	}
	return (
		<div style={styles.root}>
			{ streamArray }
		</div>
	);
};

export default StreamsList;

const styles = {
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around'
	},
	gridList: {
		width: 'max',
		height: 'auto',
		marginBottom: 24
	}
};
