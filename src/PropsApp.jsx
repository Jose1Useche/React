// export const PropsApp = props => {
//     return (
//         <>
//             <hr />
//             <h1>Hola, soy {props.title}</h1> 
//         </>
//     );
// }

export const PropsApp = ({ title = 'Texto por defecto', subtitle, subtitle2 }) => {
    return (
        <>
            <hr />
            <h1>{ title }</h1> 

            {/*Aqui suma los elementos porque JS reconoce que es un number.  subtitle={123}*/}
            <p>{ subtitle + 100 }</p>

            {/*Aqui concatena el string.  subtitle2="123"*/}
            <p>{ subtitle2 + 100 }</p>
        </>
    );
}