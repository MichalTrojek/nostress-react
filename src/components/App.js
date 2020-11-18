import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from '../globalStyles';

import { AuthProvider } from '../contexts/AuthContext';

import Home from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={SignupPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route path="/login/dashboard" component={DashboardPage} />
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;

// @media only screen and (min-width: 884px) {
//   display: none;
// }
