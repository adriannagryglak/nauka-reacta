import React from 'react';
import styles from './App.scss';
import List from '../List/ListContainer.js';
import PropTypes from 'prop-types';

class App extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
  };

  render() {
    const { title, subtitle, lists } = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        {/* was np pageContent.title when we got data from datasource not from store />*/}
        {/* <List {...listData} /> changed for*/}

        {lists.map((listData) => (
          <List key={listData.id} {...listData} />
        ))}
      </main>
    );
  }
}

export default App;
