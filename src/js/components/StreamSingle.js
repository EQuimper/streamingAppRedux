import React from 'react';
import { connect } from 'react-redux';
/*>>>>>>=============================================<<<<<<*/

const StreamSingle = ({ stream }) => (
	<div>
		I'm the single
	</div>
);

const mapStateToProps = (state) => ({ stream: state.stream });

export default connect(mapStateToProps)(StreamSingle);