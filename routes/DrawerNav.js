// Drawer React Native Navigation
import { createDrawerNavigator } from '@react-navigation/drawer';

// Stacks Navigator
import CoursesStackNav from './CoursesStackNav';
import CartStackNav from './CartStackNav';
import PaymentsStackNav from './PaymentStackNav';
import UserStackNav from './UserStackNav';

// Icons
import { Ionicons } from '@expo/vector-icons';

// Colors
import Colors from '../styles/Colors';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  const drawerDefaultOptions = { headerShown: false };

  const homeOptions = {
    title: 'Catalogue',
    drawerIcon: () => (
      <Ionicons name="ios-book" size={24} color={Colors.green} />
    ),
  };

  const cartOptions = {
    title: 'Panier',
    drawerIcon: () => (
      <Ionicons name="ios-cart" size={24} color={Colors.green} />
    ),
  };

  const paymentOptions = {
    title: 'Achat',
    drawerIcon: () => (
      <Ionicons name="ios-card" size={24} color={Colors.green} />
    ),
  };

  const userOptions = {
    title: 'Mes Cours',
    drawerIcon: () => (
      <Ionicons name="ios-mic" size={24} color={Colors.green} />
    ),
  };

  return (
    <Drawer.Navigator screenOptions={drawerDefaultOptions}>
      <Drawer.Screen
        name="Home"
        component={CoursesStackNav}
        options={homeOptions}
      />
      <Drawer.Screen
        name="CartDrawer"
        component={CartStackNav}
        options={cartOptions}
      />
      <Drawer.Screen
        name="PaymentDrawer"
        component={PaymentsStackNav}
        options={paymentOptions}
      />
      <Drawer.Screen
        name="MyCoursesDrawer"
        component={UserStackNav}
        options={userOptions}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
