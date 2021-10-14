import React, { useState } from "react";

import Form from './components/Form';
import ListTable from "./components/ListTable";

import data from "./data/data";

const App = () => {

  const [ products, setProducts ] = useState( data );

  const handleAdd = ( product ) =>{
    const productNew = {
      id: Date.now(),
      ...product 
    };
    setProducts( [ ...products, productNew ] );
  }

  return (
    <>
      <h1>Lista Mercado</h1>
      <Form handleAdd={ handleAdd } />
      <ListTable products={ products } setProducts={ setProducts }  />
    </>
  );
}

export default App;