import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/auth-operations';
import './ViewPage.css';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function RegisterView() {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'name':
        setName(value);
        break;
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

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    reset();
  };
  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                type="text"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                value={name}
                onChange={handleChange}
                autoFocus
              />
            </Grid>
            {/* <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid> */}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                onChange={handleChange}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={handleChange}
              />
            </Grid>
            {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid> */}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          {/* <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid> */}
        </form>
      </div>
      <Box mt={5}>{/* <Copyright /> */}</Box>
    </Container>
  );
}

// function RegisterView() {
// const [name, setName] = useState('');
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');
// const dispatch = useDispatch();

// const handleChange = ({ target }) => {
//   const { name, value } = target;
//   switch (name) {
//     case 'name':
//       setName(value);
//       break;
//     case 'email':
//       setEmail(value);
//       break;
//     case 'password':
//       setPassword(value);
//       break;
//     default:
//       return;
//   }
// };

// const handleSubmit = e => {
//   e.preventDefault();
//   dispatch(register({ name, email, password }));
//   reset();
// };
// const reset = () => {
//   setName('');
//   setEmail('');
//   setPassword('');
// };
//   return (
//     <div>
//       <h1>Сторінка реєстрації </h1>

//       <form
//         onSubmit={handleSubmit}
//         className="form__regiser"
//         autoComplete="off"
//       >
//         <label className="label__regiser">
//           Ім’я
//           <input type="text" name="name" value={name} onChange={handleChange} />
//         </label>

//         <label className="label__regiser">
//           Почта
//           <input
//             type="email"
//             name="email"
//             value={email}
//             onChange={handleChange}
//           />
//         </label>

//         <label className="label__regiser">
//           Пароль
//           <input
//             type="password"
//             name="password"
//             value={password}
//             onChange={handleChange}
//           />
//         </label>

//         <button type="submit">Зареєструватися</button>
//       </form>
//     </div>
//   );
// }

export default RegisterView;
