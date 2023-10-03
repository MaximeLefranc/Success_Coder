// React & React Native
import { useReducer } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Form Reducer (useReducer React)
import { INPUT_VALIDATION, formReducer } from '../formData/formReducer';

// Actions Creators
import {
  actionCreateCourse,
  actionEditCourse,
} from '../redux/actions/actionCourses';

// Components
import Input from '../components/Input';
import BtnForm from '../components/BtnForm';

// Colors
import Colors from '../styles/Colors';

// PropTypes
import PropTypes from 'prop-types';

const UserEditCourse = ({ route, navigation }) => {
  const dispatch = useDispatch();

  const { courseId } = route.params;

  const myCourse = useSelector((state) =>
    state.courses.loggedInMemberCourses.find((course) => course.id === courseId)
  );

  formInitialState = {
    inputValues: {
      title: myCourse ? myCourse.title : '',
      image: myCourse ? myCourse.image : '',
      price: myCourse ? myCourse.price.toString() : '',
      desc: myCourse ? myCourse.description : '',
    },
    isValidInput: {
      title: myCourse ? true : false,
      image: myCourse ? true : false,
      price: myCourse ? true : false,
      desc: myCourse ? true : false,
    },
    isValidForm: myCourse ? true : false,
  };

  const [formState, formDispatch] = useReducer(formReducer, formInitialState);

  const handleSubmitForm = () => {
    const { title, image, price, desc } = formState.inputValues;
    if (courseId) {
      // Update
      dispatch(actionEditCourse(courseId, title, image, desc, Number(price)));
      alert('Mise à jour');
      navigation.goBack();
    } else {
      // Create
      dispatch(actionCreateCourse(title, image, desc, Number(price)));
      alert("Céation d'un nouveau cours");
      navigation.goBack();
    }
  };

  const inputHandler = (inputName, text) => {
    let isValidInput = false;
    if (text.length > 0) {
      isValidInput = true;
    }
    formDispatch({
      type: INPUT_VALIDATION,
      payload: { value: text, isValid: isValidInput, inputName },
    });
  };

  return (
    <ScrollView>
      <View style={styles.formContainer}>
        <Input
          label="Titre"
          value={formState.inputValues.title}
          onKeyStroke={(text) => inputHandler('title', text)}
        />
        <Input
          label="Image (url)"
          value={formState.inputValues.image}
          onKeyStroke={(text) => inputHandler('image', text)}
        />
        <Input
          label="Prix"
          value={formState.inputValues.price}
          onKeyStroke={(text) => inputHandler('price', text)}
          keyboardType="decimal-pad"
        />
        <Input
          label="Description"
          value={formState.inputValues.desc}
          onKeyStroke={(text) => inputHandler('desc', text)}
          multiline
          numberOfLines={5}
        />

        <BtnForm
          handlePress={handleSubmitForm}
          btnText={
            formState.isValidForm
              ? 'Valider'
              : 'Veuillez remplir tous les champs'
          }
          activate={!formState.isValidForm}
        />
      </View>
    </ScrollView>
  );
};

UserEditCourse.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      courseId: PropTypes.string,
    }).isRequired,
  }).isRequired,
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: Colors.white,
    borderRadius: 9,
    padding: 20,
    margin: 20,
  },
});

export default UserEditCourse;
