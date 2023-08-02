import { Card } from '../Card/Card';
import { connect } from 'react-redux';
import './Intervalo.css';
import { alterarNumeroMinimo } from '../../store/actions/numeros';

const Intervalo = (props) => {
    const { min, max } = props;

    return(
        <Card title={'Intervalo de Números'} red>
            <div className='Intervalo'>
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number"  value={min} onChange={e => props.alterarMinimo(+e.target.value)}/>
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={max} readOnly/>
                </span>
            </div>
        </Card>

    );
}

const mapStateToProps = (state) => {
    return {
        min: state.numeros.min,
        max: state.numeros.max,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        alterarMinimo(novoNumero){
            //action creator => action
            const action = alterarNumeroMinimo(novoNumero);
            dispatch(action);
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Intervalo);