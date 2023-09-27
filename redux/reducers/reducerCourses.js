// DATA
import COURSES from '../../data/testData';
import { toggleSelectedExistingCourses } from '../../utils/functions';

// Actions
import { ADD_TO_CART, REMOVE_TO_CART } from '../actions/actionsCart';

const initialState = {
  existingCourses: COURSES,
};

const reducerCourses = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const newArrayToSave = toggleSelectedExistingCourses(
        action.payload.id,
        state.existingCourses,
        true
      );
      return {
        ...state,
        existingCourses: newArrayToSave,
      };
    }
    case REMOVE_TO_CART: {
      const newArrayToSave = toggleSelectedExistingCourses(
        action.payload,
        state.existingCourses,
        false
      );
      return {
        ...state,
        existingCourses: newArrayToSave,
      };
    }

    default:
      return state;
  }
};

export default reducerCourses;
