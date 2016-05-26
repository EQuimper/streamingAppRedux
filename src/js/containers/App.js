import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Block } from 'jsxstyle';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import NavBar from '../components/layout/NavBar';

injectTapEventPlugin();

const Fonts = ({ children }) =>
	<Block
		fontFamily='Roboto, sans-serif'>
		{ children }
	</Block>;


export default class App extends Component {
	render() {
		return (
			<MuiThemeProvider muiTheme={getMuiTheme()}>
				<Fonts>
					<NavBar />
					{this.props.children}
				</Fonts>
			</MuiThemeProvider>
		);
	}
}