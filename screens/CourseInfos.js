// Recat & React Native
import {
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

// Redux
import { useSelector } from 'react-redux';

// Icons
import { Ionicons } from '@expo/vector-icons';

// PropTypes
import PropTypes from 'prop-types';

// Colors
import Colors from '../styles/Colors';
import CustomButton from '../components/CustomButton';

const CourseInfos = ({ route, navigation }) => {
  const { courseId } = route.params;
  const selectedCourse = useSelector((state) =>
    state.courses.existingCourses.find(
      (currentCourse) => currentCourse.id === courseId
    )
  );

  return (
    <>
      <ScrollView style={styles.scroll}>
        <Image
          source={{ uri: selectedCourse.image }}
          title={`Image de présentation du cours: ${selectedCourse.title}`}
          style={styles.courseImage}
        />
        <View style={styles.courseDetails}>
          <Text style={styles.courseDescription}>
            {selectedCourse.description}
          </Text>
        </View>
      </ScrollView>
      <View style={styles.footerContainer}>
        <View style={styles.footerTop}>
          <View style={styles.coursePriceWrapper}>
            <Text style={styles.coursePrice}>
              {selectedCourse.price.toFixed(2)} €
            </Text>
          </View>
        </View>
        <View style={styles.footerBottom}>
          <Ionicons
            name="chevron-back-sharp"
            size={30}
            color={Colors.white}
            onPress={() => navigation.goBack()}
          />
          <CustomButton
            textButton="Ajouter au panier"
            handler={() => alert('Ajouter au panier')}
          />
        </View>
      </View>
    </>
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

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: Colors.white,
    height: '80%',
  },
  courseImage: {
    width: '100%',
    height: 250,
  },
  courseDetails: {
    padding: 20,
    alignItems: 'center',
  },
  courseDescription: {
    color: Colors.dimGrey,
    fontSize: 17,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  footerContainer: {
    height: '20%',
  },
  footerTop: {
    height: '40%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  coursePriceWrapper: {
    paddingRight: 40,
  },
  coursePrice: {
    fontSize: 24,
    color: Colors.green,
  },
  footerBottom: {
    backgroundColor: Colors.green,
    height: '60%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
});

export default CourseInfos;
