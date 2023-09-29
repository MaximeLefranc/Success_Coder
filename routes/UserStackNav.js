// React Native Navigation
import { createStackNavigator } from '@react-navigation/stack';

// React Navigation Button
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

// Screens
import UserCourses from '../screens/UserCourses';
import UserEditCourse from '../screens/UserEditCourse';

// Components
import CustomHeaderIcon from '../components/CustomHeaderIcon';

// default Navigation Header Style
import defaultStyleNav from '../utils/defaultStyleNav';

const UserStackNavigator = createStackNavigator();

const UserStackNav = () => {
  const userCoursesOptions = ({ navigation }) => ({
    headerTitle: 'Mes Cours',
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderIcon}>
        <Item
          title="Editer"
          iconName="ios-add-circle"
          onPress={() =>
            navigation.navigate('UserEditCourseStack', {
              title: 'Créer un cours',
            })
          }
        />
      </HeaderButtons>
    ),
  });

  const userEditCoursesOptions = ({ route, navigation }) => ({
    title: route.params.title ? route.params.title : 'Editer le cours',
    headerRight: () => null,
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderIcon}>
        <Item
          title="Retour"
          iconName="chevron-back"
          onPress={() => navigation.goBack()}
          style={{ paddingLeft: 10 }}
        />
      </HeaderButtons>
    ),
  });

  return (
    <UserStackNavigator.Navigator screenOptions={defaultStyleNav}>
      <UserStackNavigator.Screen
        name="UserCoursesStack"
        component={UserCourses}
        options={userCoursesOptions}
      />
      <UserStackNavigator.Screen
        name="UserEditCourseStack"
        component={UserEditCourse}
        options={userEditCoursesOptions}
      />
    </UserStackNavigator.Navigator>
  );
};

export default UserStackNav;
