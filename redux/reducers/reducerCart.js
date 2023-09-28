// Actions Types
import { ADD_TO_CART, REMOVE_TO_CART } from '../actions/actionsCart';
import { ADD_PAYMENT } from '../actions/actionsPayment';

// Class CartCourse
import CartCourse from '../../data/PaidCourseModel';

const initialState = {
  cartCourses: [],
  total: 0,
};

const reducerCart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { id, price, title } = action.payload;
      const newCartCourse = new CartCourse(id, price, title);
      return {
        ...state,
        cartCourses: [newCartCourse, ...state.cartCourses],
        total: state.total + price,
      };
    }
    case REMOVE_TO_CART: {
      const indexCourseToRemove = state.cartCourses.findIndex(
        (course) => course.id === action.payload
      );
      const newCartCoursesArray = [...state.cartCourses];
      newCartCoursesArray.splice(indexCourseToRemove, 1);

      return {
        ...state,
        cartCourses: newCartCoursesArray,
        total: state.total - state.cartCourses[indexCourseToRemove].price,
      };
    }
    case ADD_PAYMENT: {
      return {
        cartCourses: [],
        total: 0,
      };
    }

    default:
      return state;
  }
};

export default reducerCart;
