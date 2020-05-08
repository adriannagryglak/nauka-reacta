import {connect} from 'react-redux';
import Home from './Home';

const mapStateToProps = state => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: state.lists,
  
});

export default connect(mapStateToProps)(Home); //połączenie App z magazynem 

/*Funkcja connect, zaimportowana z react-redux, zwraca funkcję, która łączy komponent ze stanem, zgodnie z przekazanymi argumentami, czyli mapStateToProps. Tę zwróconą funkcję od razu wykonujemy z argumentem App. Wynik tego wykonania funkcji zwracanej przez wykonanie funkcji jest eksportowany i może być wykorzystany w innych komponentach tak samo, jakby był to komponent App.*/