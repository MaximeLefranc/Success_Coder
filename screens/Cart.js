import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cart = useSelector((state) => state.cart.cartCourses);
  const total = useSelector((state) => state.cart.total);
  console.log(cart, total);
  return (
    <View>
      <Text>Cart Screen</Text>
    </View>
  );
};

export default Cart;
