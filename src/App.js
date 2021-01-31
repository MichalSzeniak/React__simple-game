import './components/styles/App.scss';
import { HashRouter as Router } from 'react-router-dom';
import Navigation from './components/layouts/Navigation';
import Page from './components/layouts/Page';

function App() {
  return (
    <Router basename="/">
      <div className="App">
        <header>
        <Navigation />
        </header>
        <main>
        <Page />
        </main>
      </div>
    </Router>
  );
}

export default App;
