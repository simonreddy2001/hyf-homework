import React from 'react';
import { fontContext } from './fontContext';

const FontControl = () => {

    const fontSizeValue = React.useContext(fontContext)
    return (
        <div>
            <button onClick={() => { fontSizeValue.increaseFont() }}>Increase Font</button>
            <span>{fontSizeValue.fontValue}</span>
            <button onClick={() => { fontSizeValue.decreaseFont() }}>Decrease Font</button>
        </div>
    );

}

export default FontControl;