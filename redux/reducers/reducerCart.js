// Actions Types
import { ADD_TO_CART, REMOVE_TO_CART } from '../actions/actionsCart';
import { ADD_PAYMENT } from '../actions/actionsPayment';
import { DELETE_COURSE, EDIT_COURSE } from '../actions/actionCourses';

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
    case DELETE_COURSE: {
      const indexCourseToDelete = state.cartCourses.findIndex(
        (course) => course.id === action.payload
      );
      const newCartCourses = [...state.cartCourses];
      let newTotal = state.total;
      if (indexCourseToDelete >= 0) {
        newCartCourses.splice(indexCourseToDelete, 1);
        newTotal = newTotal - state.cartCourses[indexCourseToDelete].price;
      }
      return {
        ...state,
        cartCourses: newCartCourses,
        total: newTotal,
      };
    }
    case EDIT_COURSE: {
      const { courseId, price, title } = action.payload;
      const indexCourseToUpdate = state.cartCourses.findIndex(
        (course) => course.id === courseId
      );
      const newCartCourse = [...state.cartCourses];
      let newTotal = state.total;
      if (indexCourseToUpdate >= 0) {
        newCartCourse[indexCourseToUpdate] = new CartCourse(
          courseId,
          price,
          title
        );
        const newPrice = state.cartCourses[indexCourseToUpdate].price - price;
        if (newPrice >= 0) {
          newTotal = newTotal - newPrice;
        } else {
          newTotal = newTotal + -newPrice;
        }
      }
      return {
        ...state,
        cartCourses: newCartCourse,
        total: newTotal,
      };
    }

    default:
      return state;
  }
};

export default reducerCart;
