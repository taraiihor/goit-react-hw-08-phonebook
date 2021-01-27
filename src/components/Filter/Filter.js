import { useDispatch, useSelector } from 'react-redux';
import actions from '../redux/contact/contact-action';
import './Filter.css';
import { getFilter } from '../redux/contact/contact-selector';
import TextField from '@material-ui/core/TextField';

function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <TextField
      size="small"
      label="Search"
      variant="outlined"
      type="text"
      value={value}
      onChange={event => dispatch(actions.changeFilter(event.target.value))}
    />
  );
}
export default Filter;
