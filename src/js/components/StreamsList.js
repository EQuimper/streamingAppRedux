import React from 'react';
/*>>>>>>=============================================<<<<<<*/
import StreamsListSingle from './StreamsListSingle';
/*>>>>>>=============================================<<<<<<*/

const StreamsList = ({ streams }) => {
	console.log(streams);
	let streamArray = [];
	if (streams) {
		streamArray = streams.map((stream) => <StreamsListSingle key={ stream._id } { ...stream } />);
	}
	return (
		<div>
			{ streamArray }
		</div>
	);
};

export default StreamsList;
