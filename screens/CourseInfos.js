// Recat & React Native
import { View, Text } from 'react-native';

// PropTypes
import PropTypes from 'prop-types';

const CourseInfos = ({ route }) => {
  const { courseId } = route.params;
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
};

export default CourseInfos;
