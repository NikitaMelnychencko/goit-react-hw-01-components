import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem.js';
import s from './Transaction.module.scss';

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.TransactionHistory}>
      <thead>
        <tr className={s.TableTitel}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={s.TransactionBody}>
        {items.map(item => (
          <tr className={s.Line} key={item.id}>
            <TransactionItem
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
