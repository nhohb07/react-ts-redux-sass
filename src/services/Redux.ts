import { pick } from 'lodash';

// Redux
import { connect as reduxConnect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as globalActions from 'src/actions';
import { StoreState } from 'src/types/StoreState';

import store from 'src/store';

class Redux {
  /**
   * Get global state and map to props
   * @param neededStates Array<string> list of needed state to map to props
   */
  public getGlobalStates(neededStates: Array<string> | null) {
    if (!neededStates) {
      return {};
    }

    // get all store states
    const states: StoreState = store.getState();

    // Return all states from neededStates list
    return pick(states, neededStates);
  }

  /**
   * Get global actions and map to props
   * @param neededActions Array<string> list of needed actions to map to props
   */
  public getGlobalActions(neededActions: Array<string> | null | undefined) {
    if (!neededActions) {
      return {};
    }

    const result: any = {};
    const { dispatch } = store;

    for (let actionName of neededActions) {
      const actions = globalActions[`${actionName}Actions`];

      if (!actions) {
        continue;
      }

      result[`${actionName}Actions`] = bindActionCreators(actions, dispatch)
    }

    return result;
  }

  /**
   * Get redux.connect with global states and global actions
   * @param neededStates Array<string> list of needed states to map to props
   * @param neededActions Array<string> list of needed actions to map to props
   */
  public connect(neededStates: Array<string> | null, neededActions?: Array<string> | null) {
    return reduxConnect(
      neededStates ? () => this.getGlobalStates(neededStates) : null,
      neededActions ? () => this.getGlobalActions(neededActions) : null
    );
  }
}

export default new Redux();