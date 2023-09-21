// DATA
import COURSES from '../../data/testData';

const initialState = {
  existingCourses: COURSES,
};

const reducerCourses = (state = initialState, action) => {
  switch (action.type) {
    case 'test':
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default reducerCourses;
