import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import Layout from 'components/Layout/Layout';
import FizzBuzz from 'pages/FizzBuzz/FizzBuzz';
import {
    THEME_LIGHT,
    THEME_DARK,
    MUI_THEME_LIGHT,
    MUI_THEME_DARK,
    LOCAL_COLOR_THEME
} from 'constants';

const lightTheme = createTheme(MUI_THEME_LIGHT);
const darkTheme = createTheme(MUI_THEME_DARK);

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
                        <Route path="/fizz-buzz" exact element={<FizzBuzz />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
