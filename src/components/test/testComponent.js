import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './testAction';
import { Link } from 'react-router-dom/cjs/react-router-dom';

class TestComponent extends Component {
    render() {

        const {  count:enteredValue, restData } = this.props.testData
        console.log('props', this.props)

        return (
            <div>
                <Link to="/testpath">Another route</Link>
                <br/>
                {enteredValue} <br/>
                <input name="testInput" onChange={e => { this.props.someAction(e.target.value) }}></input>
                <br/>
                <button onClick={e => { this.props.restAction() }}> Click</button>
                <br/>
                {restData && restData.title}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        testData: state.testData
     }
}

const mapDispatchToProps = dispatch => bindActionCreators({ ...actions }, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(TestComponent)