// Redux
import { legacy_createStore as createStore, combineReducers } from 'redux';

// Reducers
import reducerCourses from './reducers/reducerCourses';

const rootReducer = combineReducers({
  courses: reducerCourses,
});

const store = createStore(rootReducer);

export default store;
