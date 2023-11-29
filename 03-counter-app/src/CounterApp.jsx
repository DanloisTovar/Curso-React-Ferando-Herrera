import PropTypes from 'prop-types';

// functions:
const handleOnclick = (e) => {
    console.log(e);
};
export const CounterApp = ({ value }) => {
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{value}</h2>

            <button onClick={handleOnclick}>+1</button>
        </>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
};

CounterApp.defaultProps = {
    value: 0,
};
