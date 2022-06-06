import React, { useState } from "react";
import { JWT_KEY } from "consts/app";
import LoginView from "./LoginView";

function Login(){
    const [form, setForm] = useState({
        userEmail: '',
        password: ''
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
                isLoading: true
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
                const json = await response.json();
                localStorage.setItem(JWT_KEY, JSON.stringify(json.data));
                setRequestStatus({
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
        <LoginView 
        handleInputChanged={handleInputChanged} 
        form={form} 
        requestStatus={requestStatus} 
        handleSubmit={handleSubmit} />
    );
};

export default Login;