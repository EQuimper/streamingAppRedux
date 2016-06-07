import React from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
/*>>>>>>=============================================<<<<<<*/

const styles = {
    root: {
        textAlign: 'center',
        margin: '90px auto',
        height: '600px',
        width: '600px'
    },
    text: {
        marginTop: '10px'
    },
    list: {
        listStyle: 'none'
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
                <h2>For start click on the Navbar icon in the top left and click the button All Games</h2>
                <Divider />
                <h3>Tools used:</h3>
                <ul style={styles.list}>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Webpack</li>
                </ul>
                <Divider />
                <h3>Features:</h3>
                <ul style={styles.list}>
                    <li>Fetch all games.</li>
                    <li>Fetch all streams from this game and see the current viewers.</li>
                    <li>Can see one stream and get the info about this one.</li>
                </ul>
                <Divider />
                <h2>This app is still in progress and his used for learning.</h2>
                <h3>Follow me on &nbsp;
                    <a href="https://github.com/EQuimper" target="_blank" style={styles.link}>
                        Github
                    </a>
                </h3>
                <h3>Fork the repository &nbsp;
                    <a href="https://github.com/EQuimper/streamingAppRedux" target="_blank" style={styles.link}>
                        Here
                    </a>
                </h3>
            </div>
        </Paper>
    </div>
);
/*>>>>>>=============================================<<<<<<*/
export default Home;
