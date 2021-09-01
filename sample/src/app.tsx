import * as React from 'react';
import { render } from 'react-dom';

import { createTheme } from '@material-ui/core/styles';
import responsiveFontSizes from '@material-ui/core/styles/responsiveFontSizes';
import { ThemeProvider } from '@material-ui/core/styles';

import Main from './main';

let theme = createTheme();
theme = responsiveFontSizes(theme);

render(
    <ThemeProvider theme={theme}>
        <Main />
    </ThemeProvider>,
    document.getElementById('root'),
);
