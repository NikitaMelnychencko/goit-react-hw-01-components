import PropTypes from 'prop-types';
import s from './Statistic.module.scss';

const StatisticItem = ({ label, percentage, background }) => {
  return (
    <li className={s.Item} style={{ backgroundColor: `${background}` }}>
      <span className={s.Label}>{label}</span>
      <span className={s.Percentage}>{percentage}%</span>
    </li>
  );
};

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  background: PropTypes.string.isRequired,
};

export default StatisticItem;
