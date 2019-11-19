import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './testAction';

const testComponent = (prop) =>
    <div>
        {prop.testprop}
        <input name="testInput"></input>
        <button onClick={e=> { console.log('click working', e)}}>Click</button>
    </div>

const mapStateToProps = (state) => {
    return { count: state.count }
}

const mapDispatchToProps = dispatch => bindActionCreators({...actions}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(testComponent)