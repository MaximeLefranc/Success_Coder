// React & React Redux
import { Alert, StyleSheet, Text, View } from 'react-native';

// Redux
import { useDispatch } from 'react-redux';

// Action Creator
import { actionDeleteCourse } from '../redux/actions/actionCourses';

// Components
import TouchableIcon from './TouchableIcon';

// PropTypes
import PropTypes from 'prop-types';

// Colors
import Colors from '../styles/Colors';

const CourseUser = ({ id, title, price, navigate }) => {
  const dispatch = useDispatch();

  const handleDeleteCourse = () => {
    Alert.alert('ATTENTION', `Voulez-vous supprimer le cours: ${title} ?`, [
      { text: 'NON' },
      { text: 'OUI', onPress: () => dispatch(actionDeleteCourse(id)) },
    ]);
  };

  return (
    <View style={styles.courseContainer}>
      <View style={styles.courseInfos}>
        <Text numberOfLines={1} style={styles.courseTitle}>
          {title}
        </Text>
        <Text style={styles.coursePrice}>{price.toFixed(2)} €</Text>
      </View>
      <View style={styles.btnIcons}>
        <TouchableIcon
          name="ios-pencil"
          size={24}
          color={Colors.green}
          handler={() => navigate('UserEditCourseStack', { courseId: id })}
        />
        <TouchableIcon
          name="ios-trash"
          size={24}
          color={Colors.green}
          handler={handleDeleteCourse}
        />
      </View>
    </View>
  );
};

CourseUser.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  navigate: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  courseContainer: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    marginVertical: 9,
    marginHorizontal: 17,
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 9,
  },
  courseInfos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 9,
  },
  courseTitle: {
    width: '80%',
    color: Colors.green,
    fontFamily: 'PoppinsBold',
  },
  coursePrice: {
    fontFamily: 'PoppinsRegular',
  },
  btnIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 9,
    paddingTop: 9,
  },
});

export default CourseUser;
