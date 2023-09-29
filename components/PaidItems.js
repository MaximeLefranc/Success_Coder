// React & React Native
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { useState } from 'react';

// Components
import TouchableIcon from './TouchableIcon';
import PaidCourseOverview from './PaidCourseOverview';

// PropTypes
import PropTypes from 'prop-types';

// Colors
import Colors from '../styles/Colors';

const PaidItems = ({ paymentDetails }) => {
  const [isShowing, setIsShowing] = useState(false);

  const handleShow = () => {
    setIsShowing((prevstate) => !prevstate);
  };

  return (
    <ScrollView style={styles.paidCoursesContainer}>
      <View style={styles.paidCourses}>
        <Text style={styles.total}>{paymentDetails.total.toFixed(2)} €</Text>
        <Text style={styles.date}>{paymentDetails.date}</Text>
      </View>
      <View style={styles.iconBtn}>
        <TouchableIcon
          name={
            isShowing ? 'ios-remove-circle-outline' : 'ios-add-circle-outline'
          }
          color={isShowing ? 'black' : Colors.green}
          size={24}
          handler={handleShow}
        />
      </View>
      {isShowing && (
        <View style={styles.detailPaidCourses}>
          {paymentDetails.courses.map((course) => (
            <PaidCourseOverview
              key={course.id}
              price={course.price}
              title={course.title}
            />
          ))}
        </View>
      )}
    </ScrollView>
  );
};

PaidItems.propTypes = {
  paymentDetails: PropTypes.exact({
    id: PropTypes.string.isRequired,
    courses: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
      })
    ).isRequired,
    total: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
  }),
};

const styles = StyleSheet.create({
  paidCoursesContainer: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 15,
  },
  paidCourses: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
  },
  total: {
    fontSize: 18,
    fontFamily: 'PoppinsBold',
  },
  date: {
    fontSize: 16,
    fontFamily: 'PoppinsItalic',
  },
  iconBtn: {
    alignSelf: 'flex-end',
  },
  detailPaidCourses: {
    marginTop: 10,
    borderTopColor: Colors.lightGrey,
    borderTopWidth: 1,
  },
});

export default PaidItems;
