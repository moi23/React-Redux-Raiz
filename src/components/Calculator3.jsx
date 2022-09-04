import { sum } from '../store/Calculator/Calculator.actions';
import { useDispatch, useSelector } from 'react-redux';

function Calculator3() {
  const result = useSelector((state) => state.calculator);
  const dispatch = useDispatch();

  return (
    <>
      <h2>RESULTADO: {result}</h2>
      <div>
        <input type="text" placeholder="a" />
        <input type="text" placeholder="b" />
      </div>
      <br />
      <button
        onClick={() => {
          dispatch(sum(1, 2));
        }}
      >
        Somar +
      </button>
      <button>Subtrair -</button>
    </>
  );
}

export default Calculator3;
