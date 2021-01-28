import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from '../redux/auth/auth-selectors';
import { logOut } from '../redux/auth/auth-operations';
import './UserMenu.css';
import Button from '@material-ui/core/Button';

function UserMenu() {
  const name = useSelector(getUserName);
  const dispatch = useDispatch();

  const onLogOut = () => dispatch(logOut());
  return (
    <div className="container__menu">
      <span className="avatar__menu"> </span>
      <span className="name__menu"> {name}</span>
      <Button
        variant="contained"
        color="primary"
        size="small"
        type="submit"
        onClick={onLogOut}
      >
        Logout
      </Button>
    </div>
  );
}

export default UserMenu;
