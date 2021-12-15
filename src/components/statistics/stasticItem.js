import React from 'react';
import PropTypes from 'prop-types';
import s from './statistics.module.css';

export default function StatisticItem({ percentage, label }) {
  return (
    <>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}</span>
    </>
  );
}
StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
