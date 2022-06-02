import React from "react";

function Input({type, onChange, value}){
    return <input type={type} onChange={onChange} value={value}/>;
}

export default Input;