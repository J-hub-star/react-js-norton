import Header from './components/Header';
import './App.css';
import {BrowserRouter as MainRouter,Route,Switch} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import SolutionPage from './Pages/SolutionPage';
import TimeLine from './Pages/TimeLine';

//import { CSSTransition,TransitionGroup } from 'react-transition-group';

function App() {
  
  return (
    <MainRouter>
      <div className="App" >
        <Header></Header>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/Solutions" component={SolutionPage} />
                  <Route exact path="/TimeLine" component={TimeLine} />
              </Switch>
      </div>
    </MainRouter>
  );
}

export default App;
