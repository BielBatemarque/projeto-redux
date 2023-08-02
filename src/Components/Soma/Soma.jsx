import { Card } from "../Card/Card";
import { connect } from "react-redux";

const Soma = (props) => {
    const { max, min } = props;
    console.log(max, min);

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

const mapStateToProps = (state) => {
    return {
        min: state.numeros.min,
        max: state.numeros.max,
    }
}

export default connect(mapStateToProps)(Soma);