import { RequestState, RequestActions } from 'src/types/Request';
import { REQUEST_ACTION_TYPES } from 'src/constants/actionTypes';

export const requestActions: RequestActions = {
  start(hideSpinner: boolean = false): RequestState {
    return {
      hideSpinner,
      isLoading: true,
      type: REQUEST_ACTION_TYPES.START,
    };
  },

  end(): RequestState {
    return {
      hideSpinner: false,
      isLoading: false,
      type: REQUEST_ACTION_TYPES.END,
    };
  },
};