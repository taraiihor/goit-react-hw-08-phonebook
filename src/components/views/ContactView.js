import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactForm from '../Form/ContactForm';
import ContactsList from '../Contact/ContactsList';
import Filter from '../Filter/Filter';
import { fetchContact } from '../redux/contact/contact-operations';

function ContactView() {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  useEffect(() => dispatch(fetchContact()), []); // dispatch як залежність.
  return (
    <>
      <ContactForm />
      <Filter />
      <ContactsList />
    </>
  );
}

export default ContactView;
