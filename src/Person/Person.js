import React from 'react';
const Person = (props) => {
    return (
        <div>
            <h5>I'm a person {props.name}</h5>
            <p>{props.children}</p>
        </div>
    )
}

export default Person;