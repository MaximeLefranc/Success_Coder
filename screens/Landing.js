// Reac-Native
import { FlatList } from 'react-native';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Components
import CourseItem from '../components/CourseItem';
import NoData from '../components/NoData';

// Actions
import { actionAddToCart } from '../redux/actions/actionsCart';

// PropTypes
import PropTypes from 'prop-types';

const Landing = ({ navigation }) => {
  const dispatch = useDispatch();
  const existingCourses = useSelector((state) => state.courses.existingCourses);
  const disponibleCourses = existingCourses.filter(
    (course) => !course.selected
  );

  const handleAddToCart = (course) => {
    dispatch(actionAddToCart(course));
    alert(`La formation '${course.title}' a bien été ajoutée au panier 🛒`);
  };

  if (!disponibleCourses.length) {
    return <NoData message="Nous n'avons plus de cours pour le moment 🙁" />;
  }

  return (
    <FlatList
      data={disponibleCourses}
      renderItem={({ item }) => (
        <CourseItem
          image={item.image}
          price={item.price}
          title={item.title}
          viewDetails={() =>
            navigation.navigate('Details', {
              courseId: item.id,
              title: item.title,
            })
          }
          onAddToCart={() => handleAddToCart(item)}
        />
      )}
    />
  );
};

Landing.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Landing;
