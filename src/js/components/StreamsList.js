import React, { PropTypes } from 'react';
/*>>>>>>=============================================<<<<<<*/

const StreamsList = ({streams}) => {
	console.log(streams);
	return (
		<div>
			{JSON.stringify(streams)}
			{streams.map((stream) => {
				return (
					<div>
						<h1>{stream.game}</h1>
					</div>
				);
			})}
		</div>
	);
};

StreamsList.proptypes = {
	streams: React.PropTypes.array
};

export default StreamsList;
