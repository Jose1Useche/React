import PropTypes from "prop-types";

// export const PropsApp = props => {
//     return (
//         <>
//             <hr />
//             <h1>Hola, soy {props.title}</h1> 
//         </>
//     );
// }

export const PropsApp = ({ title = 'Texto por defecto', subtitle, subtitle2, requiredTitle, nombre = 'Jose' }) => {
    // if (!requiredTitle) {
    //     throw new Error('El titulo no existe y es requerido!');
    // }

    return (
        <>
            <hr />
            <h1>{ title }</h1> 

            {/*Aqui suma los elementos porque JS reconoce que es un number.  subtitle={123}*/}
            <p>{ subtitle + 100 }</p>

            {/*Aqui concatena el string.  subtitle2="123"*/}
            <p>{ subtitle2 + 100 }</p>

            <p>Titulo requerido: { requiredTitle }</p>

            <p>Mi nombre es: { nombre }</p>
        </>
    );
}

PropsApp.propTypes = {
    requiredTitle: PropTypes.string.isRequired,
}


{/*
    react-dom_client.js?v=dbde39f5:521 Warning: PropsApp: Support for defaultProps will be removed from function components in a future major release. 
    Use JavaScript default parameters instead. at PropsApp (http://localhost:5173/src/PropsApp.jsx?t=1714597061816:18:28)

    ejm

    function PropsApp({ requiredTitle = 'Titulo por defecto en caso de que no se suministre.', nombre = 'jose USeche' }) { tu código aquí }

*/}
// PropsApp.defaultProps = {
//     requiredTitle: 'Titulo por defecto en caso de que no se suministre.',
//     nombre: 'jose USeche'
// }