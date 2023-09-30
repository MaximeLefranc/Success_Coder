// React & React Native
import { View, Text, StyleSheet } from 'react-native';

const UserEditCourse = ({ route }) => {
  console.log(route.params);
  return (
    <View>
      <Text>Modifier ou créer une formation</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default UserEditCourse;
