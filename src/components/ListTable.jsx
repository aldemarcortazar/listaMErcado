import React from "react";
import './../style/tipos.css';


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
                    <td className="tipos">Producto |</td>
                    <td className="tipos"> Precio |</td>
                    <td className="tipos"> descripción |</td>
                </tr>
            </thead>
            <tbody>
                { products.map( product => <ListRow  key={ product.id } product={ product } handleDelete={ handleDelete  } /> ) }
            </tbody>
        </table>
    );

}
export default ListTable;