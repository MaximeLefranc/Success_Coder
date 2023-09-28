// Stack of React Navigation
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Cart from '../screens/Cart';

// Default Style Navigation
import defaultStyleNav from '../utils/defaultStyleNav';

const CartStackNavigator = createStackNavigator();

const CartStackNav = () => {
  return (
    <CartStackNavigator.Navigator screenOptions={defaultStyleNav}>
      <CartStackNavigator.Screen
        name="cart"
        component={Cart}
        options={{ headerTitle: 'Panier' }}
      />
    </CartStackNavigator.Navigator>
  );
};

export default CartStackNav;
