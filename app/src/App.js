import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import Layout from './components/Layout/Layout';
import { THEME_LIGHT, THEME_DARK, LOCAL_COLOR_THEME } from 'constants';

const darkTheme = createTheme({
    cssVariables: true,
    palette: {
        mode: THEME_DARK
    }
});

const lightTheme = createTheme({
    cssVariables: true,
    palette: {
        mode: THEME_LIGHT
    }
});

function App() {
    const [colorTheme, setColorTheme] = useState(localStorage.getItem(LOCAL_COLOR_THEME) || THEME_DARK);

    const onThemeChange = () => {
        if (colorTheme === THEME_LIGHT) {
            setColorTheme(THEME_DARK);
            localStorage.setItem(LOCAL_COLOR_THEME, THEME_DARK);
        } else {
            setColorTheme(THEME_LIGHT);
            localStorage.setItem(LOCAL_COLOR_THEME, THEME_LIGHT);
        }
    }

    return (
        <ThemeProvider theme={colorTheme === THEME_LIGHT ? lightTheme : darkTheme}>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Layout onThemeChange={onThemeChange} colorTheme={colorTheme} />
                        }>
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
