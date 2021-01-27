import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContact } from '../redux/contact/contact-selector';
import { addContact } from '../redux/contact/contact-operations';
import './ContactForm.css';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
function ContactForm() {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContact);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = event => {
    event.preventDefault();
    const auditContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
    if (auditContact) {
      alert(`Контакт ${name} з таким ім’ям вже є.`);
      reset();
      return;
    }
    dispatch(addContact({ name, number }));
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          size="small"
          label="Name"
          variant="outlined"
          type="text"
          name="name"
          placeholder="Jony Dep"
          value={name}
          onChange={handleChange}
        />

        <TextField
          size="small"
          label="Phone"
          variant="outlined"
          type="text"
          name="number"
          placeholder="111-11-11"
          value={number}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          color="primary"
          size="small"
          type="submit"
          disabled={name === '' || number === ''}
          className={classes.button}
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
      </form>
    </>
  );
}

export default ContactForm;
