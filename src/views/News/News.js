import React, {useMemo, useState} from 'react';
import NewsCard from "./components/NewsCard";
import {makeStyles} from "@material-ui/styles";
import {Icon} from "@material-ui/core";
import LoopIcon from '@material-ui/icons/Loop';
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3)
    },
    container: {
        '& > *': {
            height: '100%'
        }
    }
}));

const News = props => {
    const {category} = props;
    const [news, setNews] = useState();
    let mounted = true;
    const classes = useStyles();

    const fetchNews = async () => {
        let url;
        if(category === undefined) {
            url = "http://newsapi.org/v2/top-headlines?country=id&apiKey=8f632bd7735c4ea28834eaf1e51e6cb9";
        } else {
            url = "http://newsapi.org/v2/everything?language=id&q="+category+"&apiKey=8f632bd7735c4ea28834eaf1e51e6cb9";
        }
        await fetch(url).then(async (res) => {
            await res.json().then((data) => {
                if (mounted) {
                    setNews(data.articles);
                }
            });
        });
    };

    useMemo(() => {
        fetchNews().then(() => {
            mounted = false
        });
        return () => {
            mounted = false;
        }
    });

    let loaded = false;
    const newsItem = () => {
        if (news !== undefined && !loaded) {
            loaded = true;
            return (
                news.map(singleNews => (
                    <NewsCard title={singleNews.title} date={singleNews.publishedAt} site={singleNews.source.name}
                              description={singleNews.description} siteUrl={singleNews.url} style={{marginBottom: 10, cursor: 'pointer'}}/>
                ))
            )
        } else {
            return (
                <div className={classes.container} style={{textAlign: 'center'}}>
                    <CircularProgress />
                </div>
            )
        }
    };

    return (
        <div className={classes.root}>
            {newsItem()}
        </div>
    );
};

export default News;
