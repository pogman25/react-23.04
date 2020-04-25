import React from "react";

class ListMessages extends React.PureComponent {


  
  render() {
  return (
    <ul>
      {this.props.words.map((number) =>
        <li key={number.id}> {number.message}</li>
      )}
    </ul>
  );

  }
}

export default ListMessages;
