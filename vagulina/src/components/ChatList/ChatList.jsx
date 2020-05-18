import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem } from "material-ui/List";
import { TextField } from 'material-ui';
import Flag from "material-ui/svg-icons/content/flag";
import AddIcon from "material-ui/svg-icons/content/add";
import PropTypes from "prop-types";

class ChatList extends React.Component {
  state = { newChatTitle: "" };

  handleAddChat = () => {
    if (this.state.newChatTitle.length > 0) {
      this.props.addChat(this.state.newChatTitle);
      this.setState({ newChatTitle: "" });
    }
  };

  onTitleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onTitleKeyUp = (e) => {
    if (e.keyCode === 13) {
      this.handleAddChat();
    }
  }

  render() {
    const { chats, addChat } = this.props;
    const chatElements = Object.keys(chats).map((chatId) => (
      <Link key={chatId} to={`/chat/${chatId}`}>
        <ListItem
          primaryText={chats[chatId].title}
          leftIcon={<Flag />}
        ></ListItem>
      </Link>
    ));
    return (
      <List>
        {chatElements}
        <ListItem
          key="New chat"
          leftIcon={<AddIcon />}
          onClick={this.handleAddChat}
          style={{ height: "60px" }}
          children={
            <TextField
              key="textField"
              fullWidth
              name="newChatTitle"
              hintText="Новый чат"
              onChange={this.onTitleChange}
              value={this.state.newChatTitle}
              onKeyUp={this.onTitleKeyUp}
            />
          }
        />
      </List>
    );
  }
}

ChatList.propTypes = {
  chats: PropTypes.object.isRequired,
  addChat: PropTypes.func.isRequired,
};

export default ChatList;
