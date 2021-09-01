
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateTasks from './Pages/CreateTasks';
import ShowTasks from './Pages/ShowTasks';
import SearchTask from './Pages/SearchTask';
import NavComponent from './Components/NavComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"; 
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Container id='container'>
          <header ><NavComponent /></header>
          <main>
                <Switch>
                  <Route path='/create-task'>
                    <CreateTasks />
                  </Route>
                  <Route path='/get-tasks'>
                    <ShowTasks />
                  </Route>
                  <Route path='/search-by-name'>
                    <SearchTask />
                  </Route>
                  <Route path='/'>
                    <CreateTasks />
                  </Route>
                </Switch>
          </main>
        </Container>
      </Router>
    </div>
  );
}

export default App;
