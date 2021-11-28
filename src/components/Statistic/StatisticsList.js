import PropTypes from 'prop-types';
import StatisticItem from './StatisticItem.js';
import s from './Statistic.module.scss';

const Statistics = ({ title, stats }) => {
  return (
    <div className={s.Statistic}>
      {title && <h2 className={s.Titel}>{title}</h2>}

      <ul className={s.StatList}>
        {stats.map(stat => (
          <StatisticItem
            key={stat.id}
            label={stat.label}
            percentage={stat.percentage}
            background={stat.background}
          />
        ))}
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
