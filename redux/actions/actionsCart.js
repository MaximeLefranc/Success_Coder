/*=====================================
============ACTIONS TYPES==============
=======================================*/

export const ADD_TO_CART = 'ADD_TO_CART';

/*=====================================
===========ACTIONS CREATORS============
=======================================*/

/**
 * Add a Course to Cart
 * @param {{}} course
 * @returns {{}} Action Object
 */
export const actionAddToCart = (course) => {
  return {
    type: ADD_TO_CART,
    payload: course,
  };
};
