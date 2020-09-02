import React, { useState } from 'react';
import './style.scss';
import Button from '../button';

const Tooltip = (props) => {

    const [active, setActive] = useState(false);
    let timeout;
    const { navigationList, children, rightSideImage, content, leftAddonLink } = props;


    const showTip = () => {
        clearInterval(timeout);
        setActive(true);
    }

    const hideTip = () => {
        timeout = setTimeout(() => {
            setActive(false);
        }, 400);
    };

    return (
        <div className='Tooltip-Wrapper' style={{ left: '30%' }}
            // When to show the tooltip
            onMouseEnter={showTip}
            onMouseLeave={hideTip}>

            {/* Wrapping */}
            {children}
            {active && (
                <div className='Tooltip-Tip'>
                    {/*Left Content */}
                    <div className='leftContent'>
                        <ul>
                            {navigationList.map((list, index) => (
                                <li key={index}>{list}</li>
                            ))}
                        </ul>
                        <div className='left-addon'>{leftAddonLink}</div>
                    </div>
                    {/*Right Content */}
                    <div className='rightContent'>
                        <img src={rightSideImage} alt='rocket image' />
                        <h6 className='rightSideText'>{content}</h6>
                        <Button bordered>Find out how</Button>
                    </div>
                </div>)
            }
        </div>
    );
}

export default Tooltip;