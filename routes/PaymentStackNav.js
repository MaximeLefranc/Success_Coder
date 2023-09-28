// Stack of React Navigation
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Payments from '../screens/Payments';

// Default Style Navigation
import defaultStyleNav from '../utils/defaultStyleNav';

const PaymentStackNavigator = createStackNavigator();

const PaymentsStackNav = () => {
  return (
    <PaymentStackNavigator.Navigator screenOptions={defaultStyleNav}>
      <PaymentStackNavigator.Screen
        name="Payments"
        component={Payments}
        options={{ headerTitle: 'Mes achats' }}
      />
    </PaymentStackNavigator.Navigator>
  );
};

export default PaymentsStackNav;
