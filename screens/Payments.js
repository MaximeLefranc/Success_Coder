// React @ Reat Native
import { FlatList, Text, View } from 'react-native';

// Redux
import { useSelector } from 'react-redux';

// Components
import NoData from '../components/NoData';
import PaidItems from '../components/PaidItems';

const Payments = () => {
  const payments = useSelector((state) => state.payments.payments);

  if (!payments.length) {
    return <NoData message="Pas d'achats à afficher 😟" />;
  }
  return (
    <FlatList
      data={payments}
      renderItem={({ item }) => <PaidItems paymentDetails={item} />}
    />
  );
};

export default Payments;
