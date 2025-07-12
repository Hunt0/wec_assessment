import './Layout.css';
import React from 'react';
import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';

const Layout = ({onThemeChange, colorTheme}) => {
    return (
        <div>
            <div className="Layout-Header">
                <Header
                    onThemeChange={onThemeChange}
                    colorTheme={colorTheme}
                />
            </div>
            <div className="Layout-Content">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;
