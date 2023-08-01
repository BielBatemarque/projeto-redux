import { Card } from '../Card/Card';
import './Intervalo.css';

export const Intervalo = (props) => {
    const min = props.minimo;
    const max = props.maximo;


    return(
        <Card title={'Intervalo de Números'} red>
            <div className='Intervalo'>
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={min} onChange={e => props.onMinChanged(+e.target.value)}/>
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={max} onChange={e => props.onMaxChanged(+e.target.value)}/>
                </span>
            </div>
        </Card>

    );
}