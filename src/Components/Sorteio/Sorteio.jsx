
import { Card } from "../Card/Card";
import { connect } from "react-redux";

const Sorteio = (props) => {
    const { min, max } = props;
    const sorteio = parseInt(Math.random() * (max - min)) + min;
    return(
        <Card title={'Sorteio de um Número'} purple>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{sorteio}</strong>
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

export default connect(mapStateToProps)(Sorteio);