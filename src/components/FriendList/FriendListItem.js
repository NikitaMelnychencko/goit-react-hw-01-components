import PropTypes from 'prop-types';
import s from './Friend.module.scss';

const FriendListItem = ({ avatar, name, isOnline }) => {
  let color;
  if (isOnline) {
    color = '#008000';
  } else {
    color = '#ff0000';
  }
  return (
    <>
      <span className={s.Status} style={{ backgroundColor: `${color}` }}></span>
      <img className={s.Avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.Name}>{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
