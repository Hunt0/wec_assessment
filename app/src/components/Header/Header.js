import './Header.css';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import React from 'react';
import { Link } from 'react-router-dom';
import { THEME_LIGHT } from 'constants';

const Header = ({onThemeChange, colorTheme}) => {
    return (
        <div className="Header-Container">
            <div className="Header-Left">
                <header className="Header">
                    <Link className="Header-Nav-Title" to="/">
                        WEC Technical Assessment
                    </Link>
                </header>
            </div>
            <div className="Header-Center">
                <nav>
                    <Link
                        className="Header-Nav-Link"
                        to="/fizz-buzz"
                        aria-label="Navigate to FizzBuzz page"
                    >
                        FizzBuzz
                    </Link>
                    <Link
                        className="Header-Nav-Link"
                        to="/fibonacci"
                        aria-label="Navigate to Fibonacci page"
                    >
                        Fibonacci
                    </Link>
                    <Link
                        className="Header-Nav-Link"
                        to="/fizz-bonacci"
                        aria-label="Navigate to FizzBonacci page"
                    >
                        FizzBonacci
                    </Link>
                </nav>
            </div>
            <div className="Header-Right">
                <Tooltip title="Change Light/Dark Mode">
                    <IconButton aria-label="Change color theme" onClick={onThemeChange}>
                        {colorTheme === THEME_LIGHT ? (
                            <DarkModeIcon />    
                        ) : (
                            <LightModeIcon />
                        )}
                    </IconButton>
                </Tooltip>
            </div>
        </div>
    )
}

export default Header;
