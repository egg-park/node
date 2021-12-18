import { combineReducers } from 'redux';
import user from './user_reducer';

//여러 reducer를 이용해서 결과값을 얻은 후 rootReducer에 합침
const rootReducer = combineReducers({
    user
})

export default rootReducer;