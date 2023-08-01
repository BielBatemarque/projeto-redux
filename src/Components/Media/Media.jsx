import { Card } from "../Card/Card";

export const Media = (props) => {
    const min = props.minimo;
    const max = props.maximo;

    return(
        <Card title={'Média dos Números'} green>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{(max + min)/2}</strong>
                </span>
            </div>
        </Card>

    );
}