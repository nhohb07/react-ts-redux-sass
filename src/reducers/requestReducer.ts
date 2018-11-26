import { RequestState } from 'src/types/Request';
import { REQUEST_ACTION_TYPES } from 'src/constants/actionTypes';

const initialState: RequestState = {
  isLoading: false,
  hideSpinner: false,
};

export function requestReducer(state: RequestState = initialState, { hideSpinner, type }: RequestState): RequestState {
  switch (type) {
    case REQUEST_ACTION_TYPES.START:
      return {
        ...state,
        hideSpinner,
        isLoading: true,
      };

    case REQUEST_ACTION_TYPES.END:
      return {
        ...state,
        hideSpinner: false,
        isLoading: false,
      };

    default:
      return state;
  }
};