import React from 'react';

const component1 = (props)=>{
    return (
        <div>
            {/* <h3>here's some Component1 JSX</h3>
            <p>this is prop1 of Component1: {props.prop1}</p>
            <p>this is prop2 of Component1: {props.prop2}</p>
            <p>{props.children}</p>
            <p>here is some dynamic content ==> {Math.floor(Math.random()*10)}</p> */}
            <h3>{props.crdName}</h3>
            <p>{props.children}</p>
        </div>
        
    );
}

export default component1;