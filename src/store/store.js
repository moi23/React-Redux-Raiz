import { createStore, combineReducers } from 'redux';
import calculatorReducer from './Calculator/Calculator.reducer';

/**
 *  rootReducer é o cara que vai juntar tudo num só
 *  aqui eu poderia centralizar toda a lógica e chamar aqui pra facilitar
 *  no caso do exemplo abaixo temos apenas o calculator, mas poderiam haver
 *  outros como product: productReducer...
 *
 */

const rootReducer = combineReducers({
  calculator: calculatorReducer,
});

const store = createStore(rootReducer);

export default store;
