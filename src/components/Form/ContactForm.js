import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContact } from '../redux/contact/contact-selector';
import { addContact } from '../redux/contact/contact-operations';
import './ContactForm.css';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputMask from 'react-input-mask';

function ContactForm() {
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
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        className="item__form"
      >
        <div className="item__input">
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
        </div>
        <div className="item__input">
          <InputMask
            mask="(999)999-99-99"
            maskChar={null}
            size="small"
            label="Phone"
            variant="outlined"
            type="text"
            name="number"
            value={number}
            onChange={handleChange}
          >
            {inputProps => (
              <TextField {...inputProps} type="tel" disableUnderline />
            )}
          </InputMask>
        </div>

        <div className="item__input">
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={name === '' || number === ''}
            startIcon={<SaveIcon />}
          >
            Save
          </Button>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
