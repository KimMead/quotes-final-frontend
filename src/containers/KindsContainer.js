// render other components, pass other data, 
// This is wehre we will hold the ability to create a kind and render the kinds
// Top level component - should be rendered in the App component 

import React from 'react';
import {connect} from 'react-redux';
import {fetchKinds} from '../actions/fetchKinds';
import Kinds from '../components/Kinds';
import KindInput from '../components/KindInput';


class KindsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchKinds()
    }

    render(){
        return (
            <div>
                <KindInput/>
                <Kinds kinds={this.props.kinds}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        kinds: state.kinds 

    }
}

export default connect(mapStateToProps, {fetchKinds})(KindsContainer)