import React from 'react'
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/styles/makeStyles";
import PropTypes from "prop-types";
import Dashboard from "../../../../layouts/Dashboard";
import {Redirect} from "react-router-dom";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
});



const NewsCard = props => {
    const classes = useStyles();

    const {title, date, site, description, siteUrl, ...rest} = props

    const cardHandleClick = () => {
        window.open(siteUrl, '_blank');
    };

    return (
        <Card className={classes.root} {...rest} onClick={cardHandleClick}>
            <CardContent>
                <Typography variant="h2" color="textPrimary" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="subtitle2" component="p">
                    {date.substring(0, 10)}
                </Typography>
                <Typography variant="body1" component="h2">
                    {site + " - " + description}
                </Typography>
            </CardContent>
        </Card>
    );
};

NewsCard.propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    site: PropTypes.string,
    siteUrl: PropTypes.string,
    description: PropTypes.string
};

export default NewsCard;