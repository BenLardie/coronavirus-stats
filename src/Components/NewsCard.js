import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import LanguageTwoToneIcon from '@material-ui/icons/LanguageTwoTone';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
        width: 'fit-content',
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.secondary,
        '& svg': {
            margin: theme.spacing(1.5),
        },
        '& hr': {
            margin: theme.spacing(0, 0.5),
        },
    },
    media: {
        height: 140,
    },
}));

export default function NewsCard(props) {
    const classes = useStyles();
    const { author, content, description, publishedAt, source, title, url, urlToImage } = props.article

    const preventDefault = (event) => event.preventDefault();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={urlToImage}
                    title={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h3">
                        By: {author}
                        <Divider orientation="vertical" flexItem />
                        {publishedAt}
                    </Typography>

                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Link
                    href={url} onClick={preventDefault}
                    target="_blank"
                    rel="noopener">
                    <LanguageTwoToneIcon />      
                </Link>
            </CardActions>
        </Card>
    )
}
