import { Card } from '../Card/Card';
import { connect } from 'react-redux';
import './Intervalo.css';

const Intervalo = (props) => {
    const { min, max } = props;
    return(
        <Card title={'Intervalo de Números'} red>
            <div className='Intervalo'>
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number"  value={min}/>
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={max}/>
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


export default connect(mapStateToProps)(Intervalo);