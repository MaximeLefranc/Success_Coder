/*=====================================
============ACTIONS TYPES==============
=======================================*/

export const DELETE_COURSE = 'DELETE_COURSE';
export const EDIT_COURSE = 'EDIT_COURSE';
export const CREATE_COURSE = 'CREATE_COURSE';

/*=====================================
===========ACTIONS CREATORS============
=======================================*/

/**
 * Delete one User course by this ID
 * @param {String} courseId id of course to delete
 * @returns {{}} Action Object
 */
export const actionDeleteCourse = (courseId) => {
  return {
    type: DELETE_COURSE,
    payload: courseId,
  };
};

/**
 * Edit one course from this id
 * @param {String} courseId Course to edit
 * @param {String} title
 * @param {String} img URL
 * @param {String} desc
 * @param {String} price
 * @returns {{}} Actions Objects
 */
export const actionEditCourse = (courseId, title, img, desc, price) => {
  return {
    type: EDIT_COURSE,
    payload: {
      courseId,
      title,
      img,
      desc,
      price,
    },
  };
};

/**
 * Create a new course
 * @param {String} title
 * @param {String} img URL
 * @param {String} desc
 * @param {Number} price
 * @returns {{}} Action Object
 */
export const actionCreateCourse = (title, img, desc, price) => {
  return {
    type: CREATE_COURSE,
    payload: {
      title,
      img,
      desc,
      price,
    },
  };
};
