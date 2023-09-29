// React & React Native
import { View, Text, StyleSheet } from 'react-native';

// PropTypes
import PropTypes from 'prop-types';

// Colors
import Colors from '../styles/Colors';

const PaidCourseOverview = ({ price, title }) => {
  return (
    <View style={styles.courseContainer}>
      <Text numberOfLines={1} style={styles.title}>
        {title}
      </Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
};

PaidCourseOverview.propTypes = {
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  courseContainer: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    margin: 9,
  },
  title: {
    fontFamily: 'PoppinsBold',
    width: '70%',
  },
  price: {
    fontFamily: 'PoppinsLight',
    color: Colors.dimGrey,
  },
});

export default PaidCourseOverview;
