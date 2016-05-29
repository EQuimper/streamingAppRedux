import React, { Component } from 'react';
import { connect } from 'react-redux';
/*>>>>>>=============================================<<<<<<*/
import StreamsList from '../components/StreamsList';
/*>>>>>>=============================================<<<<<<*/

const StreamsApp = React.createClass ({
	render() {
		return (
			<div>
				Streaming
				<StreamsList {...this.props.stream} />
			</div>
		);
	}
});

const mapStateToProps = (state) => ({ stream: state.stream });
/*>>>>>>=============================================<<<<<<*/
export default connect(mapStateToProps)(StreamsApp);
