import { useState } from 'react';
import PropTypes from 'prop-types';

// component:
export const CounterApp = ({ value }) => {
    // hooks:
    const [counter, setCounter] = useState(value);

    // functions:
    const handleOnclickSum = () => {
        setCounter(counter + 1);
        console.log(counter);
    };

    const handleOnclickMinus = () => {
        setCounter(counter - 1);
        console.log(counter);
    };
    const handleOnclickReset = () => {
        setCounter(value);
        console.log(counter);
    };
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>

            <button onClick={handleOnclickSum}>+1</button>
            <button onClick={handleOnclickMinus}>-1</button>
            <button onClick={handleOnclickReset}>Reset</button>
        </>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
};

CounterApp.defaultProps = {
    value: 0,
};
