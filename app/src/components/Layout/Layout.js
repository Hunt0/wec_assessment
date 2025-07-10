import React from 'react';
import Header from 'components/Header/Header';

const Layout = ({onThemeChange, colorTheme}) => {
    return (
        <>
            <div>
                <Header
                    onThemeChange={onThemeChange}
                    colorTheme={colorTheme}
                />
            </div>
        </>
    )
}

export default Layout;
