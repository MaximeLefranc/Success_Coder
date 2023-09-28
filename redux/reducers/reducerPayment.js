// Actions Types & Actions Creators
import { ADD_PAYMENT } from '../actions/actionsPayment';

// Model
import PaymentModel from '../../data/paymentModel';

// Moment
import moment from 'moment';

const initialState = {
  payments: [],
};

const reducerPayment = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PAYMENT: {
      const { cartCourses, total } = action.payload;

      const newPayment = new PaymentModel(
        Date.now().toString(),
        cartCourses,
        total,
        moment(new Date()).format('DD MM YYYY hh:mm')
      );
      return {
        ...state,
        payments: [...state.payments, newPayment],
      };
    }

    default:
      return state;
  }
};

export default reducerPayment;
