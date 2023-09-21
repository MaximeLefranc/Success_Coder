// Redux & Store
import { Provider } from 'react-redux';
import store from './redux/store';

import UsersCourses from './screens/UsersCourses';

export default function App() {
  return (
    <Provider store={store}>
      <UsersCourses />
    </Provider>
  );
}
