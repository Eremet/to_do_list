import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      textAlign: "center",
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      fontSize: '30px'
    },
  });

export default function Header() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1>TODO LIST ON REACT</h1>
        </div>
    )
}