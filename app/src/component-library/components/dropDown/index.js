import React from 'react';
import PropTypes from 'prop-types';


const DropDown = (props) => {
    const { optionsList } = props;
    return (
        <div className='gray'>
            <select>
                {/* check if opsionsLIst pass as props or not */}
                {optionsList ?
                    (optionsList.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    )))
                    : null}
            </select>

        </div>
    );

    // proptypes is not working ?!
    DropDown.propTypes = {
        optionsList: PropTypes.array
    }
}

export default DropDown;