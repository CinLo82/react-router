import React from "react";

function LogoutPage () {
    const logout = (e) => {
        e.preventDefault();
        console.log('');
    };

    return (
        <>
         <h1>Logout</h1>

         <form onSubmit={logout}>
            <label>¿Segura de que quieres salir?</label>

            <button type="submit" >Salir</button>
         </form>
        </>
    );
}

export { LogoutPage };