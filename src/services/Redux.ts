import { pick } from 'lodash';

// Redux
import { connect as reduxConnect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as globalActions from 'src/actions';
import { StoreState } from 'src/types/StoreState';

import store from 'src/store';

class Redux {
  public getGlobalStates(states: Array<string> | null, globalStates: StoreState) {
    if (!states) {
      return null;
    }

    return pick(globalStates, states);
  }

  public getGlobalActions(actions: Array<string> | null) {
    if (!actions) {
      return null;
    }

    const { dispatch } = store;

    const result: any = {};

    for (let actionName of actions) {
      result[`${actionName}Actions`] = bindActionCreators(globalActions[actionName], dispatch)
    }

    return result;
  }

  public connect(states: Array<string> | null, actions: Array<string> | null) {
    return reduxConnect(
      (globalStates: StoreState) => this.getGlobalStates(states, globalStates),
      () => this.getGlobalActions(actions)
    );
  }
}

export default new Redux();