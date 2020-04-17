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

          {'Parmesan manchego manchego. Cream cheese port-salut blue castello cottage cheese monterey jack macaroni cheese feta boursin. Cheeseburger everyone loves taleggio roquefort swiss ricotta pepper jack cheesecake. Halloumi hard cheese.'}
          {'Jarlsberg cheese and biscuits cream cheese. Smelly cheese fondue cream cheese melted cheese swiss halloumi brie jarlsberg. Parmesan pepper jack taleggio mozzarella cheese on toast swiss st. agur blue cheese halloumi. Babybel stinking bishop chalk and cheese cheese and wine airedale bocconcini.'}
          {'Taleggio fromage frais melted cheese. Fromage frais stilton macaroni cheese cheddar red leicester smelly cheese jarlsberg edam. Babybel cheese and biscuits bavarian bergkase roquefort cheesy grin fondue dolcelatte lancashire. Cheese slices bocconcini everyone loves roquefort queso goat stilton feta. Mascarpone.'}
          {'When the cheese comes out everybodys happy bocconcini cottage cheese. Mozzarella who moved my cheese cheesy grin monterey jack paneer fromage who moved my cheese blue castello. St. agur blue cheese cheese strings squirty cheese airedale st. agur blue cheese feta edam fondue. Pepper jack paneer mascarpone brie.'}
          {'Ricotta feta cheese and biscuits. Airedale stinking bishop squirty cheese cheddar cheesecake halloumi ricotta camembert de normandie. Emmental cut the cheese st. agur blue cheese feta croque monsieur st. agur blue cheese stilton boursin. Cheese strings paneer cheesy grin pepper jack cheese triangles fondue stinking bishop smelly cheese. Cheese triangles cheese on toast.'}
        
        </Typography>
        <Typography variant="body1">Sticky placeholder.</Typography>
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