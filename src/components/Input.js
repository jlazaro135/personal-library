import React from "react";

function Input({type, onChange, value, name}){
    return <input type={type} onChange={onChange} value={value} name={name}/>;
}

export default Input;