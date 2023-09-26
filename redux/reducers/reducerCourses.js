// DATA
import COURSES from '../../data/testData';

// Actions
import { ADD_TO_CART } from '../actions/actionsCart';

const initialState = {
  existingCourses: COURSES,
};

const reducerCourses = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const indexCourseToModify = state.existingCourses.findIndex(
        (course) => course.id === action.payload.id
      );
      const copyExistingCourses = [...state.existingCourses];
      copyExistingCourses[indexCourseToModify].selected = true;
      return {
        ...state,
        existingCourses: copyExistingCourses,
      };
    }

    default:
      return state;
  }
};

export default reducerCourses;
