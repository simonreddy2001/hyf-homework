import React from 'react';
import Settings from './Settings';
import Page from './Page';
import { FontProvider } from './fontContext';

const App2 = () => {

    const [fontValue, setFontValue] = React.useState(15);

    let increaseFont = () => {
        setFontValue(fontValue + 1)
    };

    let decreaseFont = () => {
        setFontValue(fontValue - 1)
    };

    const newContext = { fontValue, increaseFont: increaseFont, decreaseFont: decreaseFont }

    return (
        <FontProvider value={newContext}>
            <Settings />
            <Page />
        </FontProvider>
    );
}

export default App2;
