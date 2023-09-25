// Stack of React Navigation
import { createStackNavigator } from '@react-navigation/stack';

// React Navigation Header Buttons
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

// Screens
import Landing from '../screens/Landing';
import CourseInfos from '../screens/CourseInfos';
import Cart from '../screens/Cart';
import Colors from '../styles/Colors';
import CustomHeaderIcon from '../components/CustomHeaderIcon';

const CoursesStackNavigator = createStackNavigator();

const CoursesStackNav = () => {
  const defaultOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: Colors.green,
    },
    headerTitleStyle: {
      fontFamily: 'PoppinsBold',
    },
    headerTintColor: Colors.white,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderIcon}>
        <Item
          title="Panier"
          iconName="ios-cart-outline"
          onPress={() => navigation.navigate('Cart')}
        />
      </HeaderButtons>
    ),
  });

  return (
    <CoursesStackNavigator.Navigator screenOptions={defaultOptions}>
      <CoursesStackNavigator.Screen name="Landing" component={Landing} />
      <CoursesStackNavigator.Screen
        name="Details"
        component={CourseInfos}
        options={({ route }) => ({ headerTitle: route.params.title })}
      />
      <CoursesStackNavigator.Screen name="Cart" component={Cart} />
    </CoursesStackNavigator.Navigator>
  );
};

export default CoursesStackNav;
