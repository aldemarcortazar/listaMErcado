import React from "react";
import './../style/ListRow.css';


const ListRow = ( { product, handleDelete } ) => {

    const { id, producto, precio, descripcion } =  product;

    return(
        <tr className="fondo">
            <td> { producto } </td>
            <td> { precio }  </td>
            <td> { descripcion } </td>
            {/* <td></td> */}
            <td>
            <button
                onClick={ (  ) => handleDelete( id ) }
            > 
                 <span className="material-icons">
                        clear
                    </span>
            </button>
            </td>
        </tr>
    );

}

export default ListRow;