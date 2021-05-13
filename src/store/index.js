
import { persistStore } from 'redux-persist';
import persistReducers from './persistReducer';
import createStore from './createStore';
import rootReducer from './modules/rootReducer';


const store = createStore(persistReducers(rootReducer));
const persistor = persistStore(store);
export { persistor, store };