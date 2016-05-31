import React from 'react';
import { Link } from 'react-router';
import { GridList } from 'material-ui/GridList'; // http://www.material-ui.com/#/components/grid-list
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
				{streams.map((stream) => (
					<Link to={`/streams/${stream._id}`} key={`${stream._id}_Link`}>
						<StreamsListSingle key={stream._id} {...stream} />
					</Link>
				))}
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
