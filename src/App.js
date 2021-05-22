import {
  useHistory, BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Prompt
} from 'react-router-dom'
import { } from 'react-router';

import { Provider as AuthProvider } from './context/AuthContext'

import LandingPageNavigation from './navigation/landing-page-navigation';
import AuthPageNavigation from './navigation/auth-page-navigation';
import AppPageNavigation from './navigation/app-page-navigation';

import LandingPage from './screen/landing-page/index';
import AuthScreen from './screen/auth';
import AppGames from './screen/games';
import AppDashboard from './screen/app';

import { Enums } from './assets/data/enums';

function App() {
  return (<Router>
    <Switch>
      <AuthProvider>
        <Route exact path="/app" children={<AppDashboard />} />
        <Route exact path="/app/games" children={<AppGames />} />
        <Route exact path="/auth/:viewMode" children={<AuthScreen />} />
        <Route exact path="/" children={<LandingPage />} />
      </AuthProvider>
    </Switch>
  </Router >

  );
}

export default App;
