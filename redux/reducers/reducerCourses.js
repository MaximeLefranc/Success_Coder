// DATA
import COURSES from '../../data/testData';

// Actions
import { ADD_TO_CART, REMOVE_TO_CART } from '../actions/actionsCart';
import {
  CREATE_COURSE,
  DELETE_COURSE,
  EDIT_COURSE,
} from '../actions/actionCourses';

// Utils
import { toggleSelectedExistingCourses } from '../../utils/functions';

// Models
import CourseModel from '../../data/CourseModel';

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
    case EDIT_COURSE: {
      const { courseId, title, img, desc, price } = action.payload;
      const indexCourseToUpdate = state.loggedInMemberCourses.findIndex(
        (course) => course.id === courseId
      );
      const courseToUpdate = state.loggedInMemberCourses[indexCourseToUpdate];
      const updatedCourse = new CourseModel(
        courseId,
        title,
        desc,
        img,
        price,
        courseToUpdate.selected,
        courseToUpdate.instructorId
      );
      const newLoggedInMemberCourses = [...state.loggedInMemberCourses];
      newLoggedInMemberCourses[indexCourseToUpdate] = updatedCourse;

      const indexExistingCourses = state.existingCourses.findIndex(
        (course) => course.id === courseId
      );
      const newExistingCourses = [...state.existingCourses];
      newExistingCourses[indexExistingCourses] = updatedCourse;
      return {
        ...state,
        existingCourses: newExistingCourses,
        loggedInMemberCourses: newLoggedInMemberCourses,
      };
    }
    case CREATE_COURSE: {
      const { title, img, desc, price } = action.payload;
      const newCourse = new CourseModel(
        Date.now().toString(),
        title,
        desc,
        img,
        price,
        false,
        '1'
      );
      return {
        ...state,
        existingCourses: [...state.existingCourses, newCourse],
        loggedInMemberCourses: [...state.loggedInMemberCourses, newCourse],
      };
    }

    default:
      return state;
  }
};

export default reducerCourses;
