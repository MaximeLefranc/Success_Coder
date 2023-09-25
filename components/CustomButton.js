// React & React-Native
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// PropTypes
import PropTypes from 'prop-types';

// Colors
import Colors from '../styles/Colors';

const CustomButton = ({ textButton, handler }) => {
  return (
    <TouchableOpacity onPress={handler}>
      <View style={styles.btnAddToCart}>
        <Text style={styles.btnText}>{textButton}</Text>
      </View>
    </TouchableOpacity>
  );
};

CustomButton.propTypes = {
  textButton: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  btnAddToCart: {
    borderRadius: 6,
    paddingVertical: 9,
    paddingHorizontal: 25,
    backgroundColor: Colors.lightOrange,
  },
  btnText: {
    fontSize: 19,
  },
});

export default CustomButton;
