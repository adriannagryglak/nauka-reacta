// Ma to być komponent funkcjonalny, renderujący diva o klasie {styles.component}, w którym znajdzie się props children.
//Wykorzystaj Container w komponentach Search oraz List, wstawiając go wewnątrz głównego elementu renderowanego przez dany komponent.

import React from 'react';
import styles from './Container.scss';
import PropTypes from 'prop-types';

const Container = props => (
  <div className={styles.component}>{props.children}</div>
);

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
