import * as React from 'react';
import Redux from 'src/services/Redux';
import { RequestState } from 'src/types/Request';

import './Spinner.scss';

interface Props {
  request?: RequestState,
}

class Spinner extends React.Component<Props> {
  render() {
    const { request = { isLoading: false, hideSpinner: false } } = this.props;

    if (!request.isLoading || request.hideSpinner) {
      return null;
    }

    return (
      <div className="spinner">
        <div className="spinner-icon"></div>
      </div>
    );
  }
}

export default Redux.connect(['request'])(Spinner);
