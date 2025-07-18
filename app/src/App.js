import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import Layout from 'components/Layout/Layout';
import Home from 'pages/Home/Home';
import FizzBuzz from 'pages/FizzBuzz/FizzBuzz';
import Fibonacci from 'pages/Fibonacci/Fibonacci';
import FizzBonacci from 'pages/FizzBonacci/FizzBonacci';
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
                        <Route index element={<Home />} />
                        <Route path="/fizz-buzz" exact element={<FizzBuzz />} />
                        <Route path="/fibonacci" exact element={<Fibonacci />} />
                        <Route path="/fizz-bonacci" exact element={<FizzBonacci />} />
                        <Route path="*" element={<Navigate to="/" replace />} /> 
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
