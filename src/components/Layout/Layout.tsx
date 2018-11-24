import * as React from 'react';

export class Layout extends React.Component {
  render() {
    return (
      <div>
        <header>Header</header>

        <div className="container">
          {this.props.children}
        </div>

        <footer>Footer</footer>
      </div>
    );
  }
}
