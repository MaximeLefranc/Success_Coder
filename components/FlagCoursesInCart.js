// React & React Native
import { Text, StyleSheet, View } from 'react-native';

// Colors
import Colors from '../styles/Colors';
import { useSelector } from 'react-redux';

const FlagCoursesInCart = () => {
  const numberOfCoursesInCart = useSelector(
    (state) => state.cart.cartCourses.length
  );
  if (!numberOfCoursesInCart) {
    return null;
  }
  return (
    <View style={styles.notificationContainer}>
      <Text style={styles.notification}>{numberOfCoursesInCart}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  notificationContainer: {
    position: 'absolute',
    right: 0,
    zIndex: 1,
    backgroundColor: 'red',
    borderRadius: 15 / 2,
    overflow: 'hidden',
    height: 15,
    width: 15,
    justifyContent: 'center',
    alignItems: 'center',
    verticalAlign: 'middle',
  },
  notification: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'PoppinsRegular',
  },
});

export default FlagCoursesInCart;
