import { createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { tweetListReducer } from './apiRedux/loadTweetsRedux/reducers';

export const store = createStore(tweetListReducer, applyMiddleware(thunk))

