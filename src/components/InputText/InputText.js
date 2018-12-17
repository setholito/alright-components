import React from 'react';
import PropTypes from 'prop-types';

function InputText({ label, onChange, value }) {
    return (
        <label>
            {label}
            <input className="input" onChange={onChange} value={value} />
        </label>
    );
}

InputText.defaultProps = {};

InputText.propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};

export default InputText;
