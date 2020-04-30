import {connect} from 'react-redux';
import App from './App';

const mapStateToProps = state => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: state.lists,
  
});

export default connect(mapStateToProps)(App); //połączenie App z magazynem 

/*Funkcja connect, zaimportowana z react-redux, zwraca funkcję, która łączy komponent ze stanem, zgodnie z przekazanymi argumentami, czyli mapStateToProps. Tę zwróconą funkcję od razu wykonujemy z argumentem App. Wynik tego wykonania funkcji zwracanej przez wykonanie funkcji jest eksportowany i może być wykorzystany w innych komponentach tak samo, jakby był to komponent App.*/