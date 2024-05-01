// import { Fragment } from "react";

// export const FirstApp = () => <h1>First App</h1>

//El Fragment envuelve los tags adicionales que necesite renderizar sin crear un nuevo elemento.
//Si inspeccionamos nuestro DOM, veremos que para este componente no veremos una etiqueta <Fragment>,
//sino solo los elementos que deseamos renderizar.

// export const FirstApp = () => {
//     return <Fragment>
//         <h1>First App</h1>
//         <p>Soy un subtitulo</p>
//     </Fragment>;
// }

/*
    Sin embargo, react para simplificar el codigo, y evitar estar importando constantemente el Fragment por N cantidad de
    componentes con los cuales vayamos a trabajar, crea el elemento vacío (<>), lo cual funge como elemento padre necesario
    y remplaza las importaciones y el uso de la etiqueta Fragment, por lo que nuestro código quedaría de la siguiente manera:
*/

export const FirstApp = () => {
    return (
        <>
            <h1>First App</h1>
            <p>Soy un subtitulo</p>
        </>
    );
}