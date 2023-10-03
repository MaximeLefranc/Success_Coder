export const INPUT_VALIDATION = 'INPUT_VALIDATION';

export const formReducer = (state, action) => {
  switch (action.type) {
    case INPUT_VALIDATION: {
      const updatedInputValues = {
        ...state.inputValues,
        [action.payload.inputName]: action.payload.value,
      };

      const updatedIsValidInput = {
        ...state.isValidInput,
        [action.payload.inputName]: action.payload.isValid,
      };

      let updatedFormIsValid = true;
      for (const key in updatedIsValidInput) {
        updatedFormIsValid = updatedFormIsValid && updatedIsValidInput[key];
      }
      return {
        ...state,
        inputValues: updatedInputValues,
        isValidInput: updatedIsValidInput,
        isValidForm: updatedFormIsValid,
      };
    }

    default:
      return state;
  }
};
