import { Card } from "../Card/Card";

export const Soma = (props) => {
    const min = props.minimo;
    const max = props.maximo;
    return(
        <Card title={'Soma dos Números'} blue>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{max + min}</strong>
                </span>
            </div>
        </Card>

    );
}