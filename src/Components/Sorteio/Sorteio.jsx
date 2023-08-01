
import { Card } from "../Card/Card";

export const Sorteio = (props) => {
    const min = props.minimo;
    const max = props.maximo;
    const aleatorio = Math.random() * (max - min);

    return(
        <Card title={'Sorteio de um Número'} purple>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{Math.floor(aleatorio)}</strong>
                </span>
            </div>
        </Card>

    );
}