import reducer from './ducks/counter';
import { createStore } from 'redux';

let store = createStore(reducer);

export default store;