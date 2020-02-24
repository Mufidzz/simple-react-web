import React from 'react';
import {Link} from 'react-router-dom'
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import makeStyles from "@material-ui/core/styles/makeStyles";
import navigationConfig from './navigationConfig'

const useStyles = makeStyles(theme => ({
    root: {
        height: '100%',
        overflowY: 'auto',
        marginTop: theme.spacing(2)
    },
    content: {
        padding: theme.spacing(2),
        background: '#FFFFFF'
    },
    profile: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        minHeight: 'fit-content'
    },
    avatar: {
        width: 60,
        height: 60
    },
    name: {
        marginTop: theme.spacing(1)
    },
    divider: {
        marginTop: theme.spacing(2)
    },
    navigation: {
        marginTop: theme.spacing(2)
    }
}));

const NavBar = props => {
    const {className, ...rest} = props;
    const classes = useStyles();

    return (
        <div {...rest} className={classes.content}>
            <div className={classes.profile}>
                <Typography variant="h3">MENU</Typography>
            </div>
            <Divider className={classes.divider}/>
            <nav className={classes.navigation}>
                {navigationConfig.map(list => (
                    <div style={{padding: 0, marginBottom: 5}}>
                        <Typography variant="h5" component={Link} to={list.link}>
                            {list.title}
                        </Typography>
                    </div>
                ))}
            </nav>
        </div>
    );
};
export default NavBar;
