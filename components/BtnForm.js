// React && React-Native
import { Text, View, StyleSheet, Pressable } from 'react-native';

// PropTypes
import PropTypes from 'prop-types';

// Colors
import Colors from '../styles/Colors';

const BtnForm = ({ handlePress, btnText, activate }) => {
  return (
    <Pressable onPress={handlePress} disabled={activate}>
      <View
        style={{
          ...styles.btnContainer,
          backgroundColor: activate ? Colors.orange : Colors.green,
        }}>
        <Text
          style={{
            ...styles.btnText,
            color: activate ? Colors.darkGrey : Colors.white,
          }}>
          {btnText}
        </Text>
      </View>
    </Pressable>
  );
};

BtnForm.propTypes = {
  handlePress: PropTypes.func.isRequired,
  btnText: PropTypes.string.isRequired,
  activate: PropTypes.bool.isRequired,
};

const styles = StyleSheet.create({
  btnContainer: {
    borderRadius: 6,
    paddingVertical: 9,
    paddingHorizontal: 25,
    marginTop: 20,
  },
  btnText: {
    fontSize: 19,
    fontFamily: 'PoppinsRegular',
    textAlign: 'center',
  },
});

export default BtnForm;
