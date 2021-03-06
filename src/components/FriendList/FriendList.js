import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem.js';
import s from './Friend.module.scss';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.FriendList}>
      {friends.map(friend => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          key={friend.id}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
