// React & React Native
import { StyleSheet, FlatList, View, Text } from 'react-native';

// Redux
import { useSelector } from 'react-redux';

// Components
import NoData from '../components/NoData';

// PropTypes
import PropTypes from 'prop-types';

// Colors
import CourseUser from '../components/CourseUser';

const UserCourses = ({ navigation }) => {
  const loggedInMemberCourses = useSelector(
    (state) => state.courses.loggedInMemberCourses
  );

  if (!loggedInMemberCourses.length) {
    return <NoData message="Pas de cours à afficher" />;
  }
  return (
    <FlatList
      data={loggedInMemberCourses}
      renderItem={({ item }) => (
        <CourseUser
          id={item.id}
          title={item.title}
          price={item.price}
          navigate={navigation.navigate}
        />
      )}
    />
  );
};

UserCourses.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({});

export default UserCourses;
