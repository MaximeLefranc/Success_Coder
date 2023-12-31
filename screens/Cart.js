// React & React Native
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useEffect } from 'react';

// React Navigation Native Buttons
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Actions Creators
import { actionRemoveToCart } from '../redux/actions/actionsCart';
import { actionAddPayment } from '../redux/actions/actionsPayment';

// Components
import NoData from '../components/NoData';
import CourseInCart from '../components/CourseInCart';
import Colors from '../styles/Colors';
import CustomHeaderIcon from '../components/CustomHeaderIcon';

// PropTypes
import PropTypes from 'prop-types';

const Cart = ({ navigation }) => {
  const dispatch = useDispatch();
  const cartCourses = useSelector((state) => state.cart.cartCourses);
  const total = useSelector((state) => state.cart.total);

  const handlePayment = (courses, total) => {
    dispatch(actionAddPayment(cartCourses, total));
    alert('Paiement effectué.');
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderIcon}>
          <Item
            title="Home"
            iconName="ios-home-outline"
            onPress={() => navigation.navigate('Home')}
          />
        </HeaderButtons>
      ),
    });
  }, []);

  if (!cartCourses.length) {
    return <NoData message="Panier Vide" />;
  }
  return (
    <View style={styles.cartContainer}>
      <FlatList
        data={cartCourses}
        renderItem={({ item }) => (
          <CourseInCart
            title={item.title}
            price={item.price}
            onDelete={() => dispatch(actionRemoveToCart(item.id))}
          />
        )}
      />

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>
          Total:
          <Text style={styles.totalPrice}> {total.toFixed(2)} €</Text>
        </Text>
        <TouchableOpacity onPress={() => handlePayment(cartCourses, total)}>
          <View style={styles.btnAddPayment}>
            <Text style={styles.btnAddPaymentText}>Payer</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

Cart.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  cartContainer: {
    margin: 20,
  },
  totalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 19,
  },
  totalText: {
    fontFamily: 'PoppinsBold',
    fontSize: 19,
  },
  totalPrice: {
    color: Colors.green,
    fontFamily: 'PoppinsBold',
  },
  btnAddPayment: {
    borderRadius: 6,
    paddingVertical: 9,
    paddingHorizontal: 25,
    backgroundColor: Colors.orange,
  },
  btnAddPaymentText: {
    fontSize: 19,
    fontFamily: 'PoppinsRegular',
  },
});

export default Cart;
