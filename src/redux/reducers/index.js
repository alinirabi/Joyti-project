import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { RESET_STATE } from '../ReduxTypes';
import applicationReducer from './appReducer';

//import reportingReducer from './reportingReducer';

const appReducer = combineReducers({
  form: formReducer,
  app:applicationReducer
});

const rootReducer = (state, action) => {
  if (action.type === RESET_STATE) {
    state = { form: state.form };
  }
  return appReducer(state, action);
};

export default rootReducer;
