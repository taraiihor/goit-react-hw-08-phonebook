import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../redux/contact/contact-operations';
import './ContactsList.css';
import { getVisibleContact } from '../redux/contact/contact-selector';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Link, useLocation } from 'react-router-dom';

function ContactsList() {
  const contacts = useSelector(getVisibleContact);
  const dispatch = useDispatch();
  const location = useLocation();

  const onDeleteContact = id => dispatch(deleteContact(id));

  return (
    <>
      {!contacts.length && <div>Немає жодного контакту</div>}

      <List>
        {contacts.map(({ id, name, number }) => (
          <ListItem key={id}>
            <ListItemAvatar>
              <Avatar></Avatar>
            </ListItemAvatar>
            <ListItemText primary={name} secondary={number} />
            {/* <ListItemText primary={number} /> */}
            <Link
              className="button_mardg"
              to={{
                pathname: `/contacts/${id}`,
                state: { from: location },
              }}
            >
              <Button
                variant="contained"
                color="primary"
                size="small"
                startIcon={<BorderColorIcon />}
              >
                Edit
              </Button>
            </Link>

            <Button
              variant="contained"
              color="primary"
              size="small"
              startIcon={<DeleteIcon />}
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
}
ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};
export default ContactsList;
