import React from "react";


const ListRow = ( { product, handleDelete } ) => {

    const { id, producto, precio, descripcion } =  product;

    return(
        <tr>
            <td> { producto } </td>
            <td> { precio }  </td>
            <td> { descripcion } </td>
            {/* <td></td> */}
            <td>
            <button
                onClick={ (  ) => handleDelete( id ) }
            > 
                Eliminar 
            </button>
            </td>
        </tr>
    );

}

export default ListRow;