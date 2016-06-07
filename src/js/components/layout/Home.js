import React from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
/*>>>>>>=============================================<<<<<<*/

const styles = {
    root: {
        textAlign: 'center',
        margin: '70px auto',
        height: '750px',
        width: '650px'
    },
    text: {
        marginTop: '10px'
    },
    list: {
        listStyle: 'none',
        padding: '0'
    },
    link: {
        textDecoration: 'none'
    }
};

const Home = () => (
    <div>
        <Paper style={styles.root} zDepth={2}>
            <div style={styles.text}>
                <br />
                <h1>Welcome to my Twitch Api project</h1>
                <h3>For start click on the Navbar icon in the <br /> top left and click the button All Games</h3>
                <h3>After just need to choose a stream and you <br /> can see it live, you can chat too.</h3>
                <Divider />
                <h4>Tools used:</h4>
                <ul style={styles.list}>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Webpack</li>
                </ul>
                <Divider />
                <h4>Features:</h4>
                <ul style={styles.list}>
                    <li>Fetch all games.</li>
                    <li>Fetch all streams from this game and see the current viewers.</li>
                    <li>Can see one stream and get the info about this one.</li>
                </ul>
                <Divider />
                <h3>This app is still in progress.</h3>
                <h4>Futur features:</h4>
                <ul style={styles.list}>
                    <li>Can have favorite streamers.</li>
                    <li>Can have a dashboard and a login.</li>
                </ul>
                <h4>Follow me on &nbsp;
                    <a href="https://github.com/EQuimper" target="_blank" style={styles.link}>
                        Github
                    </a>
                </h4>
                <h4>Fork the repository &nbsp;
                    <a href="https://github.com/EQuimper/streamingAppRedux" target="_blank" style={styles.link}>
                        Here
                    </a>
                </h4>
            </div>
        </Paper>
    </div>
);
/*>>>>>>=============================================<<<<<<*/
export default Home;
