import React from 'react';
import PropTypes from 'prop-types';
import TransactionsItem from './transactionsItem';
import s from './transactionHistory.module.css';
export default function TransactionHistory({ items }) {
  return (
    <table className={s.transactionHistory}>
      <thead className={s.thead}>
        <tr>
          <th className={s.th}>Type</th>
          <th className={s.th}>Amount</th>
          <th className={s.th}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id} className={s.tr}>
            <TransactionsItem
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            ></TransactionsItem>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
