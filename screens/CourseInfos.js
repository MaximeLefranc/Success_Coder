// Recat & React Native
import { View, Text } from 'react-native';
import { useEffect } from 'react';

// Redux
import { useSelector } from 'react-redux';

// PropTypes
import PropTypes from 'prop-types';

const CourseInfos = ({ route, navigation }) => {
  const { courseId } = route.params;
  // const selectedCourse = useSelector((state) =>
  //   state.courses.existingCourses.find(
  //     (currentCourse) => currentCourse.id === courseId
  //   )
  // );
  // useEffect(() => {
  //   navigation.setOptions({
  //     headerTitle: selectedCourse.title,
  //   });
  // }),
  //   [selectedCourse];

  return (
    <View>
      <Text>Course Infos Screen</Text>
    </View>
  );
};

CourseInfos.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      courseId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  navigation: PropTypes.object.isRequired,
};

export default CourseInfos;
