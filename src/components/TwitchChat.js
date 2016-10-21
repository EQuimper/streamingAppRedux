import React from "react";
// import Toggle from "material-ui/Toggle";

const styles = {
  base:   {
    marginTop: '15px'
  },
  toggle: {
    marginBottom: 16
  },
  chat:   {
    boxShadow: 'rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px',
    flexBasis: '25%'
  }
};

const ChatIframe = ({ name }) => (

  <iframe style={styles.chat}
          src={`https://www.twitch.tv/${name}/chat?popout=`}
          frameBorder="0"
          scrolling="no"
          height="500">
  </iframe>

);

//class TwitchChat extends React.Component {
//
//  constructor() {
//    super();
//
//    this.state = {
//      showChat: false
//    };
//
//    this.showChat = this.showChat.bind(this);
//
//  }
//
//  showChat(e) {
//    this.setState({ showChat: !this.state.showChat });
//  }
//
//  render() {
//
//    const { name } = this.props;
//
//    return (
//      <div style={styles.base}>
//        <Toggle label="Chat"
//                labelPosition="right"
//                defaultToggled={false}
//                onClick={this.showChat}
//                style={styles.toggle} />
//        { this.state.showChat ? <ChatIframe name={name} /> : null }
//      </div>
//    );
//
//  }
//
//}

export default ChatIframe;

//export default TwitchChat;
