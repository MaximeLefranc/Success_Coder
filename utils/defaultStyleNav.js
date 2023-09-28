// React & React Native
import { Text, StyleSheet } from 'react-native';

// React Native Navigation Buttons
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

// Components
import CustomHeaderIcon from '../components/CustomHeaderIcon';
import FlagCoursesInCart from '../components/FlagCoursesInCart';

// Colors
import Colors from '../styles/Colors';

const defaultStyleNav = ({ navigation }) => ({
  headerStyle: {
    backgroundColor: Colors.green,
  },
  headerTitleStyle: {
    fontFamily: 'PoppinsBold',
  },
  headerTintColor: Colors.white,
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderIcon}>
      <FlagCoursesInCart />
      <Item
        title="Panier"
        iconName="ios-cart-outline"
        onPress={() => navigation.navigate('CartDrawer')}
      />
    </HeaderButtons>
  ),
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderIcon}>
      <Item
        title="Menu"
        iconName="ios-menu"
        onPress={() => navigation.toggleDrawer()}
        style={{ paddingLeft: 10 }}
      />
    </HeaderButtons>
  ),
});

export default defaultStyleNav;
