import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getCards} from '../../redux/cardsRedux.js';

//export const getCardsForColumn = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);

const mapStateToProps = (state,props) => ({
  cards: getCards(state, props.match.params.title),
});


export default connect(mapStateToProps)(SearchResults);