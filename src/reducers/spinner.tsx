import { Spinner } from 'src/types/Spinner';

const initialState: Spinner = {
  isLoading: false,
};

export const spinner = (state: Spinner = initialState, { type }: Spinner) => {
  switch (type) {
    case 'SHOW_SPINNER':
      return {
        ...state,
        isLoading: true,
      };

    case 'HIDE_SPINNER':
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};