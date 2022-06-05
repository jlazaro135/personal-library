import React, { useState } from "react";
import Input from "components/Input";
import Button from "components/Button";

function Login({

}){
    const [userEmail, setUserEmail]= useState("");
    const [password, setPassword]= useState("");
    const [hasLoginFailed, setHasLoginFailed] = useState(false);
    const [hasLoginSucceeded, setHasLoginSucceeded] = useState(false);

    function handleEmail(event){
        setUserEmail(event.target.value);
    }
    function handlePassword(event){
        setPassword(event.target.value);
    }

    async function handleSubmit(e){
        e.preventDefault();
        console.log('hola');
        try {
            const response = await fetch('https://librarify.latteandfront.es/api/login_check', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  username: userEmail,
                  password
                })
              });if (response.ok) {
                setHasLoginSucceeded(true);
                setHasLoginFailed(false);
              } else {
                setHasLoginFailed(true);
                setHasLoginSucceeded(false);
              }
            } catch (error) {
              setHasLoginFailed(true);
              setHasLoginSucceeded(false);
            }
          }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Input type="email" onChange={handleEmail} value={userEmail}/>
                <Input  type="password" onChange={handlePassword} value={password}/>
                <Button type="submit" textButton="Botón"></Button>
        </form>
        <div>
            {hasLoginSucceeded && <div>alerta success</div>}
            {hasLoginFailed && <div>alerta fail</div>}
        </div>
        </div>
    );
};

export default Login;