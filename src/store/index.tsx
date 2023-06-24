import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { userReducer } from './reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
	userReducer,
});
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type TAppStore = typeof store;
export type TAppDispatch = TAppStore['dispatch'];
export type TRootState = ReturnType<typeof rootReducer>;
