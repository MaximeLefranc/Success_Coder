export const INPUT_VALIDATION = 'INPUT_VALIDATION';

export const formReducer = (state, action) => {
  switch (action.type) {
    case INPUT_VALIDATION:
      return {
        ...state,
      };

    default:
      return state;
  }
};
