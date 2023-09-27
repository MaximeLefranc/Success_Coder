/**
 * Change the Selected property to course with his id in state.existingCourse
 * @param {Sting} idCourse to modify
 * @param {[]} existingCourses Array of existing courses in courses state
 * @param {Boolean} bool selected = true or selected = false
 * @returns {[]} New Array to save in courses state
 */
export const toggleSelectedExistingCourses = (
  idCourse,
  existingCourses,
  bool
) => {
  const indexCourseToModify = existingCourses.findIndex(
    (course) => course.id === idCourse
  );
  const newArray = [...existingCourses];
  newArray[indexCourseToModify].selected = bool;
  return newArray;
};
