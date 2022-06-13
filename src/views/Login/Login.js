import React, { useState } from "react";
import {useAuthContext} from 'contexts/authContext';
import apiClient from "utils/apiClients";
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

    const {login} = useAuthContext();

    async function handleSubmit(e){
        e.preventDefault();
        try {
            setRequestStatus({
                isLoading: true,
                hasSucceeded: false,
                hasFailed: false
              });
            const json = await apiClient.post('/login_check', {
                  username: form.userEmail,
                  password: form.password
              });
              login(json.data);
              setRequestStatus({
                hasSucceeded: true,
                isLoading: false,
                hasFailed: false
            });
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