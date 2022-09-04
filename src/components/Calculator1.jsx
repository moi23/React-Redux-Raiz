import { useSelector } from 'react-redux';

function Calculator1() {
  /**
   *  useSelector faz o mesmo trabalho que o mapStateToProps
   *  só que de forma mais simples, é um hook que espera uma função
   *  que retorna o estado esperado.
   */
  const result = useSelector(function (state) {
    return state.calculator;
  });

  return (
    <>
      <h2>RESULTADO: {result}</h2>
      <div>
        <input type="text" placeholder="a" />
        <input type="text" placeholder="b" />
      </div>
      <br />
      <button>Somar +</button>
      <button>Subtrair -</button>
    </>
  );
}

export default Calculator1;
