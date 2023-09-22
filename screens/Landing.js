// Reac-Native
import { FlatList, Text, View } from 'react-native';

// Redux
import { useSelector } from 'react-redux';

// Components
import CourseItem from '../components/CourseItem';
import NoData from '../components/NoData';

const Landing = () => {
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
          viewDetails={() => alert('Détails')}
          onAddToCart={() => alert('Panier')}
        />
      )}
    />
  );
};

export default Landing;
