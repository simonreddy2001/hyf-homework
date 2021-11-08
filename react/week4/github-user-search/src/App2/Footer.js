import React from 'react';
import { fontContext } from './fontContext';

const Footer = (props) => {

    const fontsizeValue = React.useContext(fontContext)
    const font = `${fontsizeValue.fontValue}px`
    return (

        <div>
            <h1 style={{ fontSize: font }}>Footer</h1>
        </div>
    );

}

export default Footer;