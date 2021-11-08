import React from 'react';
import { fontContext } from './fontContext';

const Header = (props) => {

    const fontsizeValue2 = React.useContext(fontContext)
    const font2 = `${fontsizeValue2.fontValue}px`

    return (
        <div>
            <h1 style={{ fontSize: font2 }}>Header</h1>
        </div>
    );

}

export default Header;