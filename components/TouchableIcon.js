// React & React Native
import { TouchableOpacity } from 'react-native';

// Icons
import { Ionicons } from '@expo/vector-icons';

// PropTypes
import PropTypes from 'prop-types';

const TouchableIcon = ({ name, size, color, handler }) => {
  return (
    <TouchableOpacity onPress={handler}>
      <Ionicons name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

TouchableIcon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};

export default TouchableIcon;
