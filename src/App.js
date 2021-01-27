import './components/styles/App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/layouts/Navigation';
import Page from './components/layouts/Page';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Page />
      </div>
    </Router>
  );
}

export default App;
