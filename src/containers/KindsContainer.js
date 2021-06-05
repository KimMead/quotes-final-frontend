// render other components, pass other data, 
// This is wehre we will hold the ability to create a kind and render the kinds
// Top level component - should be rendered in the App component 
import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {fetchKinds} from '../actions/fetchKinds';
import Kinds from '../components/Kinds';
import Kind from '../components/Kind';
import KindInput from '../components/KindInput';
import Quote from '../components/Quote';


class KindsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchKinds()
    }

    render(){
        return (
            <>
                <Route exact path='/new' component={KindInput}/>
                <Route path='/kinds/:id' render={(routerProps) => <Kind {...routerProps} kinds={this.props.kinds}/>} />
                <Route exact path='/kinds' render={(routerProps) => <Kinds {...routerProps} kinds={this.props.kinds}/>} />
                <Route exact path='/kinds/:id/quote/:id' render={(routerProps) => <Quote {...routerProps} quote={this.props.kind}/>} />
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        kinds: state.kinds 

    }
}

export default connect(mapStateToProps, {fetchKinds})(KindsContainer)