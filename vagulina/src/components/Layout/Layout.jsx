import React from "react";
import PropTypes from "prop-types";
import MessageField from "../MessageField";
import ChatList from "../ChatList";
import Header from "../Header";
import css from "./index.css";

class Layout extends React.Component {
  static propTypes = {
    chatId: PropTypes.number,
  };

  static defaultProps = {
    chatId: 1,
  };

  render() {
    return (
      <div className={css.layout}>
        <Header chatId={this.props.chatId} />
        <div className={css.canvas}>
          <div className="layout-left-side">
            <ChatList />
          </div>
          <div className="layout-right-side">
            <MessageField chatId={this.props.chatId} />
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
