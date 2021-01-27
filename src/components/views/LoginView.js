import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/auth-operations';
import './ViewPage.css';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {/* {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '} */}
//       {/* {new Date().getFullYear()} */}
//       {'.'}
//     </Typography>
//   );
// }
const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handleChange = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(logIn({ email, password }));

    reset();
  };
  const reset = () => {
    setEmail('');
    setPassword('');
  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="email"
            type="email"
            name="email"
            value={email}
            autoComplete="email"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="password"
            name="password"
            value={password}
            label="Password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          {/* <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid> */}
        </form>
      </div>
      <Box mt={8}>{/* <Copyright /> */}</Box>
    </Container>
  );
}

// export function LoginView() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();
//   const handleChange = ({ target }) => {
//     const { name, value } = target;
//     switch (name) {
//       case 'email':
//         setEmail(value);
//         break;
//       case 'password':
//         setPassword(value);
//         break;
//       default:
//         return;
//     }
//   };

//   const handleSubmit = event => {
//     event.preventDefault();
//     dispatch(logIn({ email, password }));

//     reset();
//   };
//   const reset = () => {
//     setEmail('');
//     setPassword('');
//   };
//   return (
//     <div>
//       <h1>Сторінка логіну</h1>

//       <form onSubmit={handleSubmit} className="form__login" autoComplete="off">
//         <label className="label__login">
//           Почта
//           <input
//             type="email"
//             name="email"
//             value={email}
//             onChange={handleChange}
//           />
//         </label>

//         <label className="label__login">
//           Пароль
//           <input
//             type="password"
//             name="password"
//             value={password}
//             onChange={handleChange}
//           />
//         </label>
//         <Button
//           variant="contained"
//           color="primary"
//           disableElevation
//           type="submit"
//         >
//           Увійти
//         </Button>
//         {/* <button type="submit">Увійти</button> */}
//       </form>
//     </div>
//   );
// }
export default LoginView;
