import React, { useState } from 'react';

const CRMContext = React.createContext([{}, () => { }]); //Recibe Objeto y Funcion

const CRMProvider = props => {

    //Definir el state inicial
    //auth: Objeto
    //guardarToken: Funcion
    const [auth, guardarAuth] = useState({
        token: '',
        auth: false
    });

    return (
        <CRMContext.Provider value={[auth, guardarAuth]}>
            {props.children}
        </CRMContext.Provider>
    );
}

export { CRMContext, CRMProvider };