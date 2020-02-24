import { colors } from '@material-ui/core'

const white = '#FFFFFF';
const black = '#000000';

export default {
    black,
    white,
    primary : {
        contrastText: white,
        dark: colors.deepOrange[900],
        main: colors.deepOrange[500],
        light: colors.deepOrange[100]
    },
    secondary: {
        contrastText: white,
        dark: colors.orange[900],
        main: colors.orange[500],
        light: colors.orange[100]
    },
    error: {
        contrastText: white,
        dark: colors.red[900],
        main: colors.red[600],
        light: colors.red[400]
    },
    text: {
        primary: colors.grey[800],
        secondary: colors.grey[600],
        link: colors.blue[600]
    },
    background: {
        default : '#F4F6F8',
        paper: white
    },
    divider: colors.grey[200]
}