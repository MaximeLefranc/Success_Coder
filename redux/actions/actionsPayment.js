/*=====================================
============ACTIONS TYPES==============
=======================================*/

export const ADD_PAYMENT = 'ADD_PAYMENT';

/*=====================================
===========ACTIONS CREATORS============
=======================================*/

/**
 * Doing the payment for all courses present in the User cart
 * @param {[]} cartCourses Array of courses present in cart
 * @param {Number} total price of courses in cart
 * @returns {{}} Action Object
 */
export const actionAddPayment = (cartCourses, total) => {
  return {
    type: ADD_PAYMENT,
    payload: {
      cartCourses,
      total,
    },
  };
};
