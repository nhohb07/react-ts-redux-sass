import * as React from 'react';

class Layout extends React.Component {
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

export default Layout;