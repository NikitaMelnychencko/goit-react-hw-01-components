import PropTypes from 'prop-types';
import StatisticItem from './StatisticItem.js';
import s from './Statistic.module.scss';

const Statistics = ({ title, stats }) => {
  return (
    <div className={s.Statistic}>
      {title !== undefined && <h2 className={s.Titel}>{title}</h2>}

      <ul className={s.StatList}>
        {stats.map(stat => (
          <li
            className={s.Item}
            key={stat.id}
            style={{ backgroundColor: `${stat.background}` }}
          >
            <StatisticItem label={stat.label} percentage={stat.percentage} />
          </li>
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
      background: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
