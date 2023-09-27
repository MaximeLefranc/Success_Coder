/*=====================================
============ACTIONS TYPES==============
=======================================*/

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_TO_CART = 'REMOVE_TO_CART';

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

/**
 * Remove a Course to Cart
 * @param {String} courseId
 * @returns {{}} Action Object
 */
export const actionRemoveToCart = (courseId) => {
  return {
    type: REMOVE_TO_CART,
    payload: courseId,
  };
};
