// React & React-Native
import { Image, StyleSheet, View, Text } from 'react-native';

// PropTypes
import PropTypes from 'prop-types';

// Style
import globalStyles from '../styles/globalStyles';
import Colors from '../styles/Colors';

const CourseItem = ({ image, price, title }) => {
  return (
    <View style={styles.coursesContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: image }}
          title={`Course image: ${title}`}
        />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.courseTitle}>{title}</Text>
        <Text style={styles.coursePrice}>{price.toFixed(2)}</Text>
      </View>
    </View>
  );
};

CourseItem.propTypes = {
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  coursesContainer: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    height: 300,
    margin: 25,
    borderColor: Colors.lightGrey,
    borderWidth: 1,
  },
  imageContainer: {
    width: '100%',
    height: '60%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  detailsContainer: {
    alignItems: 'center',
    height: '20%',
    padding: 10,
  },
  courseTitle: {
    fontSize: 18,
    marginVertical: 4,
    color: Colors.green,
    fontFamily: 'PoppinsBold',
    textTransform: 'uppercase',
  },
  coursePrice: {
    color: Colors.darkGrey,
    fontFamily: 'PoppinsRegular',
    fontSize: 16,
  },
});

export default CourseItem;
