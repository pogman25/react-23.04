import React from "react";
import PropTypes from "prop-types";

export default class Message extends React.Component {
  componentDidMount() {
    console.log("message did mount");
  }

  componentDidUpdate() {
    console.log("message did update");
  }

  render() {
    console.log("message render");
    const { author, text } = this.props;
    return (
      <div>
        <b>{author}:</b> {text}
      </div>
    );
  }
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

Message.defaultProps = {
    text: '(empty)',
    author: 'Noname'
}