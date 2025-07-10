import './Header.css';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import React from 'react';
import { THEME_LIGHT, THEME_DARK, LOCAL_COLOR_THEME } from 'constants';

const Header = ({onThemeChange, colorTheme}) => {
    return (
        <div className="Header-Container">
            <header className="Header">WEC Technical Assessment</header>
            <Tooltip title="Change Light/Dark Mode">
                <IconButton onClick={onThemeChange}>
                    {colorTheme === THEME_LIGHT ? (
                        <DarkModeIcon />    
                    ) : (
                        <LightModeIcon />
                    )}
                </IconButton>
            </Tooltip>
        </div>
    )
}

export default Header;
