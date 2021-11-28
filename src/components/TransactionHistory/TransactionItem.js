import PropTypes from 'prop-types';
import s from './Transaction.module.scss';

const TransactionItem = ({ type, amount, currency }) => {
  return (
    <tr className={s.Line}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionItem;
