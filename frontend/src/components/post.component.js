import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Post(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.subreddit}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.username}
        </Typography>
        <Typography variant="body2" component="p">
          {props.text}
        </Typography>
      </CardContent>
      <CardActions>
      <Link to={"/r/" + props.subreddit}>
        <Button size="small">Learn More</Button>
      </Link>
      {/* <Route path={"/r/" + props.subreddit} >
        <Button size="small">Learn More</Button>
      </Route> */}
      </CardActions>
    </Card>
  );
}