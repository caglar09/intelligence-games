import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import LandingPageNavigation from './navigation/landing-page-navigation';
import AuthPageNavigation from './navigation/auth-page-navigation';
import LandingPage from './screen/landing-page/index';
import { Container } from 'reactstrap';
import AuthScreen from './screen/auth';
import { Enums } from './assets/data/enums';

function App() {
  return (
    <Container fluid className="px-0">
      <Router>

        <Switch>

          <AuthPageNavigation path="/auth">
            <Route path="/auth/register">
              <AuthScreen viewMode={Enums.AuthScreenViewModes.Register} />
            </Route>
            <Route path="/auth/login">
              <AuthScreen viewMode={Enums.AuthScreenViewModes.Login} />
            </Route>
          </AuthPageNavigation>

          <LandingPageNavigation path="/">
            <Route path="" >
              <LandingPage />
            </Route>
          </LandingPageNavigation>



        </Switch>
      </Router>
    </Container>
  );
}

export default App;
