import React, { useState } from 'react';
import useDebounce from './useDebounce';

const Pesquisar = ({ value, onChange }) => {
    const [displayValue, setDisplayValue] = useState(value);
    const debouncedChange = useDebounce(onChange, 600);

    function handleChange(e) {
        setDisplayValue(e.target.value);
        debouncedChange(e.target.value);
    }
    return (
        <input type="search" value={displayValue} onChange={handleChange} />
    )
}

export default Pesquisar;