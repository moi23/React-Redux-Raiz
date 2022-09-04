/**
 *  Reducer é uma função que retorna o ESTADO
 *  Reducer é uma função que como argumento espera dois parametros,
 *  1. Estado && Também é possivel definir o estado inicial, por default.
 *  2. Ação || Action (no caso o objeto, que foi criado com "type" e "payload")
 */

export default function (state = 0, action) {
  switch (action.type) {
    case 'SUM':
      return action.payload[0] + action.payload[1];

    case 'SUBTRACT':
      return action.payload[0] - action.payload[1];

    default:
      return state;
      break;
  }
}
