import React from 'react';
import PropTypes from 'prop-types';
import s from './friends.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <span className={s.status} style={{ backgroundColor: isOnline ? 'green' : 'red' }}>
        {isOnline ? 'on' : 'off'}
      </span>

      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </>
  );
}
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
