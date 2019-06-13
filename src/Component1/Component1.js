import React from 'react';

const component1 = (props)=>{
    return (
        <div>
            <h3>here's some Component1 JSX</h3>
            <p>this is prop1 of Component1: {props.prop1}</p>
            <p>this is prop2 of Component1: {props.prop2}</p>
            <p>{props.children}</p>
        </div>
        
    );
}

export default component1;