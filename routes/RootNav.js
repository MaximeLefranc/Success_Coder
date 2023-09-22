// React Native Navigation
import { NavigationContainer } from '@react-navigation/native';

// Different Navigations
import CoursesStackNav from './CoursesStackNav';

const RootNav = () => {
  return (
    <NavigationContainer>
      <CoursesStackNav />
    </NavigationContainer>
  );
};

export default RootNav;
