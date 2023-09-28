import 'react-native-gesture-handler';

// React & React-Native
import { StatusBar, View } from 'react-native';
import { useCallback } from 'react';

// Redux & Store
import { Provider } from 'react-redux';
import store from './redux/store';

// Navigation / Routes
import RootNav from './routes/RootNav';

// SplashScreen
import * as SplashScreen from 'expo-splash-screen';

// Expo-fonts
import { useFonts } from 'expo-font';

// Fonts
import PoppinsRegular from './assets/fonts/Poppins-Regular.ttf';
import PoppinsLight from './assets/fonts/Poppins-Light.ttf';
import PoppinsItalic from './assets/fonts/Poppins-Italic.ttf';
import PoppinsBold from './assets/fonts/Poppins-Bold.ttf';

// Style
import globalStyles from './styles/globalStyles';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    PoppinsRegular,
    PoppinsItalic,
    PoppinsLight,
    PoppinsBold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={globalStyles.body}>
      <Provider store={store}>
        <StatusBar style="light" translucent backgroundColor="transparent" />
        <RootNav />
      </Provider>
    </View>
  );
}
