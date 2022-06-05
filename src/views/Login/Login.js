import React, { useState } from "react";
import Input from "components/Input";
import Button from "components/Button";

function Login({

}){
    const [form, setForm] = useState({
        userEmail: '',
        password: '',
    });

    const [requestStatus, setRequestStatus] = useState({
        isLoading: false,
        hasFailed: false,
        hasSucceeded: false
      });

    function handleInputChanged(event) {
    setForm((currentForm) => ({
      ...currentForm,
      [event.target.name]: event.target.value
    }));
  }

    async function handleSubmit(e){
        e.preventDefault();
        try {
            setRequestStatus({
                isLoading: true,
                hasFailed: false,
                hasSucceeded: false
              });
            const response = await fetch('https://librarify.latteandfront.es/api/login_check', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  username: form.userEmail,
                  password: form.password
                })
              });
              if (response.ok) {
                setRequestStatus({
                    isLoading: false,
                    hasFailed: false,
                    hasSucceeded: true
                });
              } else {
                setRequestStatus({
                    isLoading: false,
                    hasFailed: true,
                    hasSucceeded: false
                });
            }
            } catch (error) {
                setRequestStatus({
                    isLoading: false,
                    hasFailed: true,
                    hasSucceeded: false
                });
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
            {requestStatus.isLoading && <div>está cargando</div>}
            {requestStatus.hasSucceeded && <div>alerta success</div>}
            {requestStatus.hasFailed && <div>alerta fail</div>}
        </div>
        </div>
    );
};

export default Login;