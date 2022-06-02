import React from "react";

function Button({onClick, textButton, type}){
    return <button type={type} onClick={onClick}>{textButton}</button>;
}

export default Button;