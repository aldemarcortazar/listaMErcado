import React from "react";


import ListRow from './ListRow';

const ListTable = ( { products, setProducts } ) => {

   

    const handleDelete = ( id ) => {
        console.log('id', id);
        setProducts( products.filter( p => p.id !== id ) );
    }
    
    return(
        <table>
            <thead>
                <tr>
                    <td> Producto </td>
                    <td> Precio </td>
                    <td> descripcion </td>
                </tr>
            </thead>
            <tbody>
                { products.map( product => <ListRow  key={ product.id } product={ product } handleDelete={ handleDelete  } /> ) }
            </tbody>
        </table>
    );

}
export default ListTable;