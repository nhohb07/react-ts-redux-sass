import { Spinner } from 'src/types/Spinner';
import { ACTION_SHOW_SPINNER, ACTION_HIDE_SPINNER } from 'src/constants';

const initialState: Spinner = {
  isLoading: false,
};

export const spinner = (state: Spinner = initialState, { type }: Spinner) => {
  switch (type) {
    case ACTION_SHOW_SPINNER:
      return {
        ...state,
        isLoading: true,
      };

    case ACTION_HIDE_SPINNER:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};