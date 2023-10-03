// React && Recat Native
import { StyleSheet, Text, TextInput, View } from 'react-native';

// PropTypes
import PropTypes from 'prop-types';

// Colors
import Colors from '../styles/Colors';

const Input = (props) => {
  console.log(props);
  return (
    <View style={styles.formControl}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        {...props}
        style={styles.input}
        value={props.value}
        onChangeText={props.onKeyStroke}
      />
    </View>
  );
};

Input.propTypes = {
  props: PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onKeyStroke: PropTypes.func.isRequired,
  }),
};

const styles = StyleSheet.create({
  formControl: {
    width: '100%',
  },
  label: {
    marginVertical: 15,
    color: Colors.green,
    fontFamily: 'PoppinsBold',
  },
  input: {
    padding: 9,
    borderColor: Colors.green,
    borderWidth: 0.5,
    borderRadius: 6,
    fontFamily: 'PoppinsRegular',
  },
});

export default Input;
