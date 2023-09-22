// React & React-Native
import { StyleSheet, Text, View } from 'react-native';

// PropTypes
import PropTypes from 'prop-types';

// Colors
import Colors from '../styles/Colors';

const NoData = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

NoData.propTypes = {
  message: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  text: {
    color: Colors.green,
    fontSize: 19,
    textAlign: 'center',
    fontFamily: 'PoppinsBold',
  },
});

export default NoData;
