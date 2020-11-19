import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from '../globalStyles';

import { AuthProvider } from '../contexts/AuthContext';

import Home from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import PrivateRoute from '../components/common/PrivateRoute';
function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={LoginPage} />
            <PrivateRoute exact path="/dashboard" component={DashboardPage} />
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
