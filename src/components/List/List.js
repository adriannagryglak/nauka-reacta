import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';

class List extends React.Component {
   static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
  }

  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }

  render() {
    
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} imgSrc={this.props.imgSrc}/>
        <div className={styles.description}>
          {this.props.children}
        </div>
      <div className={styles.columns}>
        <Column columnTitle={this.props.title1}/>
        <Column columnTitle={this.props.title2}/>
        <Column columnTitle={this.props.title3}/>
      </div>
      </section>
    )
  }
}

export default List;