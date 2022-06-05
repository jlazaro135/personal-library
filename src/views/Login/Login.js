import React, { useState } from "react";
import Input from "components/Input";
import Button from "components/Button";

function Login({

}){
    const [form, setForm] = useState({
        userEmail: '',
        password: '',
    });

    const [hasLoginFailed, setHasLoginFailed] = useState(false);
    const [hasLoginSucceeded, setHasLoginSucceeded] = useState(false);

    function handleInputChanged(event) {
    setForm((currentForm) => ({
      ...currentForm,
      [event.target.name]: event.target.value
    }));
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
                  username: form.userEmail,
                  password: form.password
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
                <Input type="email" name="userEmail" onChange={handleInputChanged} value={form.userEmail}/>
                <Input  type="password" name="password" onChange={handleInputChanged} value={form.password}/>
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