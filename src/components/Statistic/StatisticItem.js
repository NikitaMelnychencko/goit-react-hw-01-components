import PropTypes from 'prop-types';
import s from './Statistic.module.scss';

const StatisticItem = ({ label, percentage }) => {
  return (
    <>
      <span className={s.Label}>{label}</span>
      <span className={s.Percentage}>{percentage}%</span>
    </>
  );
};

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticItem;
