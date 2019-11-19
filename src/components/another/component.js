import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom';
const AnotherComponent =(props) => 

<div>
    <Link to="/">Go To Home</Link> <br/>
    Another component <br/>
    Path Param: {props.match.params.id}
</div>

export default AnotherComponent