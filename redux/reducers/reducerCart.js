// Actions Types
import { ADD_TO_CART } from '../actions/actionsCart';

// Class CartCourse
import CartCourse from '../../data/paidCourseModel';

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

    default:
      return state;
  }
};

export default reducerCart;
