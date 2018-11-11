import { Spinner } from 'src/types/Spinner';
import { ACTION_SHOW_SPINNER, ACTION_HIDE_SPINNER } from 'src/constants';

export const spinner = {
  show(): Spinner {
    return {
      isLoading: true,
      type: ACTION_SHOW_SPINNER,
    };
  },

  hide(): Spinner {
    return {
      isLoading: false,
      type: ACTION_HIDE_SPINNER,
    };
  },
};