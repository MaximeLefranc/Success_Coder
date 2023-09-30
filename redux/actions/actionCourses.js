/*=====================================
============ACTIONS TYPES==============
=======================================*/

export const DELETE_COURSE = 'DELETE_COURSE';

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
