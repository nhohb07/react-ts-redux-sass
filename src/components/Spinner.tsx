import * as React from 'react';
import { connect } from 'react-redux';

import 'src/scss/Spinner.scss';
import { StoreState } from 'src/types/StoreState';
import { Spinner as SpinnerInterface } from 'src/types/Spinner';

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
