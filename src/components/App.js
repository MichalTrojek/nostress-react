import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from '../globalStyles';

import { AuthProvider } from '../contexts/AuthContext';
import PrivateRoute from '../components/common/PrivateRoute';

import Home from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import NewsPage from './pages/NewsPage';

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
            <PrivateRoute exact path="/news" component={NewsPage} />
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
