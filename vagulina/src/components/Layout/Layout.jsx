import React from "react";
import PropTypes from "prop-types";
import MessageField from "../MessageField";
import ChatList from "../ChatList";
import Header from "../Header";
import css from "./index.css";

class Layout extends React.Component {
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

Layout.propTypes = {
  chatId: PropTypes.number,
};

Layout.defaultProps = {
  chatId: 1,
};

export default Layout;