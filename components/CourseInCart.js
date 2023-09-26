// React & React Native
import { StyleSheet, Text, View } from 'react-native';

// PropTypes
import PropTypes from 'prop-types';

// Icons
import TouchableIcon from './TouchableIcon';

// Colors
import Colors from '../styles/Colors';

const CourseInCart = ({ title, price, onDelete }) => {
  return (
    <View style={styles.courseContainer}>
      <Text numberOfLines={1} style={styles.title}>
        {title}
      </Text>
      <Text style={styles.price}>{price.toFixed(2)} €</Text>
      <TouchableIcon
        name="ios-trash-sharp"
        size={30}
        color={Colors.green}
        handler={onDelete}
      />
    </View>
  );
};

CourseInCart.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  courseContainer: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginBottom: 9,
  },
  title: {
    width: '60%',
    fontFamily: 'PoppinsRegular',
  },
  price: {
    textAlign: 'right',
    paddingRight: 9,
    width: '30%',
    fontFamily: 'PoppinsRegular',
  },
});

export default CourseInCart;
