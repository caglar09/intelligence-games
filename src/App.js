import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import LandingPageNavigation from './navigation/landing-page-navigation';
import LandingPage from './screen/landing-page/index';
import { Container } from 'reactstrap';

function App() {
  return (
    <Container fluid className="px-0">
      <Router>
        <Switch>
          <LandingPageNavigation path="/">
            <Route path="/" >
              <LandingPage />
            </Route>
          </LandingPageNavigation>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
