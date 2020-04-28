import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';


class Card extends React.Component{
  static propTypes = {
    title: PropTypes.string.isRequired,
  }
  
  render(){
    
    return(
      <section className={styles.component}>
        <h1>{this.props.title}</h1>
      </section>
    )
  }
}

export default Card;