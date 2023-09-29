// Stack of React Navigation
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Landing from '../screens/Landing';
import CourseInfos from '../screens/CourseInfos';

// Default Style Nav
import defaultStyleNav from '../utils/defaultStyleNav';

const CoursesStackNavigator = createStackNavigator();

const CoursesStackNav = () => {
  return (
    <CoursesStackNavigator.Navigator screenOptions={defaultStyleNav}>
      <CoursesStackNavigator.Screen
        name="Landing"
        component={Landing}
        options={{ headerTitle: 'Catalogue' }}
      />
      <CoursesStackNavigator.Screen
        name="Details"
        component={CourseInfos}
        options={({ route }) => ({ headerTitle: route.params.title })}
      />
    </CoursesStackNavigator.Navigator>
  );
};

export default CoursesStackNav;
