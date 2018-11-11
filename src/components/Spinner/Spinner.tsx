import * as React from 'react';

class Spinner extends React.Component {
  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}

export default Spinner;