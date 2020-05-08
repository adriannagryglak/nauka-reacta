import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js';

class SearchResults extends React.Component {
  static propTypes = {
    cards: PropTypes.array,
    icon: PropTypes.string,
    addCard: PropTypes.func,
  };

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }
  
  
  render() {
    const {icon, cards } = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          {'Is this what you are looking for?'}
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
        </h3>

        {cards.map((cardData) => (
          <Card key={cardData.id} {...cardData} />
        ))}

      </section>
    );
  }
}

export default SearchResults;
