import React from "react";
import { Link } from "react-router";
import RaisedButton from "material-ui/RaisedButton";
/*>>>>>>=============================================<<<<<<*/

const styles = {
  root:     {
    display:             'flex',
    flexDirection:       'column',
    justifyContent:      'center',
    alignItems:          'center',
    width:               '100%',
    height:              'calc(100vh - 64px)',
    backgroundImage:     'url(https://images.unsplash.com/10/wii.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=38ab2a46e8621c8c23f5e4f10dcc7017)',
    backgroundSize:      'cover',
    backgroundBlendMode: 'multiply',
    backgroundColor:     '#0277BD'
  },
  button:   {
    margin: '0 10px'
  },
  btnGroup: {
    flexDirection: 'row',
    display:       'flex'
  },
  title:    {
    color:      'white',
    fontSize:   '3.2em',
    fontFamily: 'initial',
    textShadow: '2px 2px 2px black'
  }
};

const Home = () => (

  <div style={styles.root}>
    <h2 style={styles.title}>GameStreaming</h2>
    <div style={styles.btnGroup}>
      <div style={styles.button}>
        <Link to="games">
          <RaisedButton primary={true} label="All Games" />
        </Link>
      </div>
      <div style={styles.button}>
        <a href="https://github.com/EQuimper/streamingAppRedux" target="_blank">
          <RaisedButton label="Github" />
        </a>
      </div>
    </div>
  </div>

);

export default Home;
