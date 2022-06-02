import React, { useState } from "react";
import Input from "components/Input";
import Button from "components/Button";



function Login({
    userEmail,
    setUserEmail,
    password,
    setPassword
}){
    [userEmail, setUserEmail]= useState("");
    [password, setPassword]= useState("");

    function handleEmail(event){
        setUserEmail(event.target.value);
    }
    function handlePassword(event){
        setPassword(event.target.value);
    }

    function handleSubmit(){
        console.log('hola');
    }
    
    return (
        <>
        <Input type="email" onChange={handleEmail} value={userEmail}/>
        <Input  type="password" onChange={handlePassword} value={password}/>
        <Button type="submit" textButton="Botón" onClick={handleSubmit}></Button>
        <h1>el mail es: {userEmail} y la cotnraseña es: {password}</h1>
        </>
    );
};

export default Login;