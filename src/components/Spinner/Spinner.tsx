import * as React from 'react';
import { connect } from 'react-redux';

import { StoreState } from 'src/types/StoreState';
import { Spinner as SpinnerInterface } from 'src/types/Spinner';

import './Spinner.scss';

interface Props {
  spinner: SpinnerInterface,
}

class Spinner extends React.Component<Props> {
  render() {
    const { spinner } = this.props;

    if (!spinner.isLoading) {
      return null;
    }

    return (
      <div className="spinner">
        <div className="spinner-icon"></div>
      </div>
    );
  }
}

const mapStateToProps = ({ spinner }: StoreState) => ({
  spinner,
});

export default connect(mapStateToProps)(Spinner);
