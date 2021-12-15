import React from 'react';
import PropTypes from 'prop-types';
import StatisticItem from './stasticItem';
import s from './statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title}</h2>

      <ul className={s.list}>
        {stats.map(stat => (
          <li key={stat.id} className={s.item}>
            <StatisticItem
              key={stat.id}
              label={stat.label}
              percentage={stat.percentage}
            ></StatisticItem>
          </li>
        ))}
      </ul>
    </section>
  );
}
Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired })),
};
