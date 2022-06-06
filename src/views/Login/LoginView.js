import React from "react";
import Button from "components/Button";
import Input from "components/Input";

export default function LoginView({handleSubmit, handleInputChanged, requestStatus, form}){
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Input type="email" name="userEmail" onChange={handleInputChanged} value={form.userEmail}/>
                <Input type="password" name="password" onChange={handleInputChanged} value={form.password}/>
                <Button type="submit" textButton="Botón"></Button>
        </form>
        <div>
            {requestStatus.isLoading && <div>está cargando</div>}
            {requestStatus.hasSucceeded && <div>alerta success</div>}
            {requestStatus.hasFailed && <div>alerta fail</div>}
        </div>
        </div>
    );
}