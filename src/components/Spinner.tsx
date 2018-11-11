import * as React from 'react';
import 'src/styles/Spinner.scss';

class Spinner extends React.Component {
  render() {
    return (
      <div className="spinner">
        <div className="spinner-icon"></div>
      </div>
    );
  }
}

export default Spinner;