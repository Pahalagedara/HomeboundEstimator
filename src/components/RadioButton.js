import React from 'react'


const RadioButton = (props) => {
    const { name, value, setValue} = props;

    const cliked = () => {
        setValue(value);
    };
    
    return (
        <div>
            <input type="radio" onClick={cliked} value={value} name={name}/>
            <label className="ml-3">{value}</label>
        </div>
    )
}

export default (RadioButton)
