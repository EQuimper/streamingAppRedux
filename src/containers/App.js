import React, { Component, PropTypes } from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
import { Block } from "jsxstyle";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { myTheme } from "../components/layout/theme";
import NavBar from "../components/layout/NavBar";

injectTapEventPlugin(); // Need it cause of material for mobile

// Make the fonts Roboto cause of Material
const Fonts = ({ children }) => (

  <Block
    fontFamily='Roboto, sans-serif'>
    { children }
  </Block>

);

// The Main App
export default class App extends Component {

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(myTheme)}>
        <Fonts>
          <NavBar />
          {this.props.children}
        </Fonts>
      </MuiThemeProvider>
    );
  }

}

// Only a single child can be passed to a component as children.
App.propTypes = {
  children: PropTypes.element.isRequired
};
