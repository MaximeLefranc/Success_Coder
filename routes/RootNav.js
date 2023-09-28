// React Native Navigation
import { NavigationContainer } from '@react-navigation/native';

// Different Navigations
import DrawerNav from './DrawerNav';

const RootNav = () => {
  return (
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  );
};

export default RootNav;
