// Drawer React Native Navigation
import { createDrawerNavigator } from '@react-navigation/drawer';

// Stacks Navigator
import CoursesStackNav from './CoursesStackNav';
import CartStackNav from './CartStackNav';
import PaymentsStackNav from './PaymentStackNav';

// Icons
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  const drawerDefaultOptions = { headerShown: false };

  const homeOptions = {
    title: 'Catalogue',
    drawerIcon: () => <Ionicons name="ios-book" size={24} />,
  };

  const cartOptions = {
    title: 'Panier',
    drawerIcon: () => <Ionicons name="ios-cart-outline" size={24} />,
  };

  const paymentOptions = {
    title: 'Achat',
    drawerIcon: () => <Ionicons name="ios-card" size={24} />,
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
    </Drawer.Navigator>
  );
};

export default DrawerNav;
