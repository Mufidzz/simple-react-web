import React from 'react';
import {Router} from 'react-router-dom'
import {ThemeProvider} from '@material-ui/styles'
import {renderRoutes} from 'react-router-config'
import routes from "./routes";
import theme from "./themes"
import {createBrowserHistory} from 'history';
import './assets/scss/index.scss'


const history = createBrowserHistory();


function App() {
    return (
        // <StoreProvider>
        <ThemeProvider theme={theme}>
            {/*<MuiPickersUtilsProvider>*/}
            <Router history={history}>
                {renderRoutes(routes)}
            </Router>
            {/*</MuiPickersUtilsProvider>*/}
        </ThemeProvider>
        // </StoreProvider>
    );
}

export default App;
