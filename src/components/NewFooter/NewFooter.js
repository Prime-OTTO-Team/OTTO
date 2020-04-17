import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';


function Copyright() {
  return (
    <Typography className="nav-link" variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Mktfare
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export default function NewFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />

      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Sticky Test
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>

          
        </Typography>
        <Typography variant="body1">Sticky footer placeholder.</Typography>
      </Container>

      <footer className={classes.footer}>
        <Container maxWidth="sm">
            
          <Link className="nav-link" to="/about"> About </Link>
          <Link className="nav-link" to="/contact"> Contact Us </Link>
          <Link className="nav-link" to="/terms"> Terms and Conditions </Link>

          {/* <Typography variant="body1">My sticky footer can be found here.</Typography> */}
          < Copyright />
        </Container>
      </footer>
    </div>
  );
}