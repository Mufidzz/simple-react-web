import React from 'react'
import {AppBar, Container} from "@material-ui/core";
import PropTypes from 'prop-types'
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import {makeStyles} from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";

const useStyles = makeStyles(() => ({
    appBarHeader: {
        background: '#FFFFFF',
        height: 100,
        maxWidth: '100%',
        width: '100%',
        margin: 0,
        direction: 'column',
        alignItems: 'center'
    }
}));

const TopBar = props => {
    const {className, ...rest} = props;
    const classes = useStyles();

    return (
        <AppBar {...rest} className={className}>
            <Grid container className={classes.appBarHeader}>
                <Grid item xs={12}>
                    <Typography variant="h1" color="#000000">
                        Material UI
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h6" color="#000000">
                        This Website Created using ReactJS And Material-UI By Mufid Zukhruf Bahtiar
                    </Typography>
                </Grid>
            </Grid>
            <Toolbar>
                <Typography variant="h6" color="inherit" component={Link} to="/news">
                    Home
                </Typography>
                <Typography variant="h6" color="inherit" component={Link} to="/us">
                    About Us
                </Typography>
                <Typography variant="h6" color="inherit" component={Link} to="/portofolio">
                    Portofolio
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

TopBar.propTypes = {
    className: PropTypes.string
};

export default TopBar;

