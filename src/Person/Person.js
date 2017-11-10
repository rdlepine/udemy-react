import React from 'react';
import './Person.css';

const Person = (props) => {
    return (
        <div className="Person">
            <h5 onClick={props.click}>I'm a person {props.name}</h5>
            <p >{props.children}</p>
            <input type="text" value={props.name} onChange={props.changed} />
        </div>
    )
}

export default Person;