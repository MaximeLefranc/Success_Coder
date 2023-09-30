// React & React Native
import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

// Redux
import { useSelector } from 'react-redux';

// Colors
import Colors from '../styles/Colors';

const UserEditCourse = ({ route }) => {
  const { courseId } = route.params;

  const myCourse = useSelector((state) =>
    state.courses.loggedInMemberCourses.find((course) => course.id === courseId)
  );

  const [title, setTitle] = useState(myCourse ? myCourse.title : '');
  const [image, setImage] = useState(myCourse ? myCourse.image : '');
  const [price, setPrice] = useState(myCourse ? myCourse.price.toString() : '');
  const [desc, setDesc] = useState(myCourse ? myCourse.description : '');

  return (
    <ScrollView>
      <View style={styles.formContainer}>
        <View style={styles.formControl}>
          <Text style={styles.label}>Titre</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={(text) => setTitle(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Image (url)</Text>
          <TextInput
            style={styles.input}
            value={image}
            onChangeText={(image) => setImage(image)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Prix</Text>
          <TextInput
            style={styles.input}
            value={price}
            onChangeText={(price) => setPrice(price)}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.input}
            value={desc}
            onChangeText={(desc) => setDesc(desc)}
            multiline
          />
        </View>
        <TouchableOpacity onPress={() => alert('Valider')}>
          <View style={styles.btnContainer}>
            <Text style={styles.btnText}>Valider</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: Colors.white,
    borderRadius: 9,
    padding: 20,
    margin: 20,
  },
  formControl: {
    width: '100%',
  },
  label: {
    marginVertical: 15,
    color: Colors.green,
    fontFamily: 'PoppinsBold',
  },
  input: {
    padding: 9,
    borderColor: Colors.green,
    borderWidth: 0.5,
    borderRadius: 6,
    fontFamily: 'PoppinsRegular',
  },
  btnContainer: {
    borderRadius: 6,
    paddingVertical: 9,
    paddingHorizontal: 25,
    backgroundColor: Colors.orange,
    marginTop: 20,
  },
  btnText: {
    fontSize: 19,
    fontFamily: 'PoppinsRegular',
    textAlign: 'center',
  },
});

export default UserEditCourse;
