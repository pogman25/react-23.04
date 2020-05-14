import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem } from "material-ui/List";
import Flag from "material-ui/svg-icons/content/flag";

class ChatList extends React.Component {
  render() {
    return (
      <List>
        <Link to="/chat/1">
          <ListItem primaryText="Chat1" leftIcon={<Flag />}></ListItem>
        </Link>
        <Link to="/chat/2">
          <ListItem primaryText="Chat2" leftIcon={<Flag />}></ListItem>
        </Link>
        <Link to="/chat/3">
          <ListItem primaryText="Chat3" leftIcon={<Flag />}></ListItem>
        </Link>
      </List>
    );
  }
}

export default ChatList;
