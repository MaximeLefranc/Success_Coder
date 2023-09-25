// Reac-Native
import { FlatList } from 'react-native';

// Redux
import { useSelector } from 'react-redux';

// Components
import CourseItem from '../components/CourseItem';
import NoData from '../components/NoData';

// PropTypes
import PropTypes from 'prop-types';

const Landing = ({ navigation }) => {
  const existingCourses = useSelector((state) => state.courses.existingCourses);

  if (!existingCourses.length) {
    return <NoData message="Nous n'avons plus de cours pour le moment 🙁" />;
  }

  return (
    <FlatList
      data={existingCourses}
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
          onAddToCart={() => alert('Panier')}
        />
      )}
    />
  );
};

Landing.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Landing;
