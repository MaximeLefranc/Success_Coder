// DATA
import COURSES from '../../data/testData';
import { toggleSelectedExistingCourses } from '../../utils/functions';
import { DELETE_COURSE } from '../actions/actionCourses';

// Actions
import { ADD_TO_CART, REMOVE_TO_CART } from '../actions/actionsCart';

const initialState = {
  existingCourses: COURSES,
  loggedInMemberCourses: COURSES.filter(
    (course) => course.instructorId === '1'
  ),
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
    case DELETE_COURSE:
      return {
        ...state,
        existingCourses: state.existingCourses.filter(
          (course) => course.id !== action.payload
        ),
        loggedInMemberCourses: state.loggedInMemberCourses.filter(
          (course) => course.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default reducerCourses;
