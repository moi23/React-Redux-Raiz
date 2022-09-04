import { connect } from 'react-redux';

function Calculator2({ result }) {
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

/**
 *  mapStateToProps -> é uma convenção
 *  poderia ser chamada de outro nome como "bataToProps"
 *  ela recebe o estado atual como parametro|| argumento.
 *  e retorna as props que queremos para o componente.
 *  segue o exemplo abaixo.
 *
 */

function mapStateToProps(state) {
  return {
    result: state.calculator,
  };
}

export default connect(mapStateToProps)(Calculator2);
