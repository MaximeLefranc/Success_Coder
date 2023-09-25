// React Navigation Header Button
import { HeaderButton } from 'react-navigation-header-buttons';

// Icones Ionicons
import { Ionicons } from '@expo/vector-icons';

// Colors
import Colors from '../styles/Colors';

const CustomHeaderIcon = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={30}
      color={Colors.white}
    />
  );
};

export default CustomHeaderIcon;
