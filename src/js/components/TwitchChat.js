import React from 'react';
import Toggle from 'material-ui/Toggle';
/*>>>>>>=============================================<<<<<<*/

const styles = {
    toggle: {
        marginBottom: 16
    }
};

const ChatIframe = ({ name }) => (
    <iframe
        src={`https://www.twitch.tv/${name}/chat?popout=`}
        frameborder="0"
        scrolling="no"
        height="500"
        width="350">
    </iframe>
);

class TwitchChat extends React.Component {
    constructor() {
        super();
        this.state = {
            showChat: false
        };
        this.showChat = this.showChat.bind(this);
    }

    showChat(e) {
        this.setState({ showChat: !this.state.showChat });
    }

    render() {
        const { name } = this.props;
        return (
            <div>
                <Toggle
                    label="Chat"
                    labelPosition="right"
                    defaultToggled={false}
                    onClick={this.showChat}
                    style={styles.toggle}
                />
                { this.state.showChat ? <ChatIframe name={name} /> : <h1>Why no chat ?</h1> }
            </div>
        );
    }
}

export default TwitchChat;
