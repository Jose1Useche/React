import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
    console.log('el componente se dispara nuevamente por cada cambio en el estado.');

    {/*Los Hooks deben ser creados DENTRO del function component*/}
    const [counter, setCounter] = useState(value);
    
    const handleAdd = () => {
        setCounter(counter + 1);
        {/*Tambien podemos hacer lo mismo de la siguiente manera:*/}
        {/*setCounter((c) => c + 1)*/}
    };

    const restaValor = () => {
        setCounter(counter -1);
    }

    const reseteaValor = () => {
        setCounter(value);
    }

    return (
        <>
            <hr />
            <h1>Counter App</h1>
            <h2>{ counter }</h2>

            <button onClick={ handleAdd }>+1</button>
            <button onClick={ restaValor }>-1</button>
            <button onClick={ reseteaValor }>Reset</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}