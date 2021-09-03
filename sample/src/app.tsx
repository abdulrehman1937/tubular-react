import * as React from 'react';
import { render } from 'react-dom';

import { createTheme } from '@mui/material/styles';
import responsiveFontSizes from '@mui/material/styles/responsiveFontSizes';
import ThemeProvider from '@mui/styles/ThemeProvider';

import Main from './main';
let theme = createTheme();
theme = responsiveFontSizes(theme);

render(
    <ThemeProvider theme={theme}>
        <Main />
    </ThemeProvider>,
    document.getElementById('root'),
);
