import React, {useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import KindEdit from '../components/KindEdit';
import QuotesContainer from '../containers/QuotesContainer'
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Kind = (props) => {

    let kind = props.kinds.filter((item) => {
        return item.id == props.match.params.id
    })[0]
    
    return (

        <div>
            <br></br>
            {kind && (
                <>
                    <h2>

                        {kind.name}
                    </h2>
                    <KindEdit kind={kind} />
                    <QuotesContainer kind={kind} />

                </>
            ) }

        </div>
    )
}

const mapStateToProps = state => {
    return {
        kindId: state.kindId,
        kinds: state.kinds

    }
}

const mapDispatchToProps = dispatch => {
    return {
        getKindDetails: (kindsArray, kindId) => {
            let kind = kindsArray.filter((item) => {
                return item.id == kindId
            })[0]
            return kind
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Kind)