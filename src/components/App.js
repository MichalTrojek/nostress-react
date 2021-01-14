import { Switch, Route } from 'react-router-dom';
import { GlobalStyle } from '../globalStyles';

import { AuthProvider } from '../contexts/AuthContext';
import PrivateRoute from './PrivateRoute';

import Home from './pages/public/HomePage';
import OrderPage from './pages/public/OrderPage';
import LoginPage from './pages/public/LoginPage';

import DashboardPage from './pages/private/DashboardPage';
import NewsPage from './pages/private/NewsPage';
import MealsPage from './pages/private/MealsPage';
import SoupsPage from './pages/private/SoupsPage';
import BusinessHoursPage from './pages/private/BusinessHoursPage';
import CustomersOrdersPage from './pages/private/CustomersOrdersPage';
import NewsCardPage from './pages/private/NewsCardPage';

import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <GlobalStyle />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/order" component={OrderPage} />
        <AuthProvider>
          <Route exact path="/login" component={LoginPage} />
          <PrivateRoute exact path="/dashboard/" component={DashboardPage} />
          <PrivateRoute
            exact
            path="/dashboard/orders"
            component={CustomersOrdersPage}
          />
          <PrivateRoute exact path="/dashboard/meals" component={MealsPage} />
          <PrivateRoute exact path="/dashboard/soups" component={SoupsPage} />
          <PrivateRoute
            exact
            path="/dashboard/hours"
            component={BusinessHoursPage}
          />
          <PrivateRoute exact path="/dashboard/news" component={NewsPage} />
          <PrivateRoute
            exact
            path="/dashboard/cards"
            component={NewsCardPage}
          />
        </AuthProvider>
      </Switch>
      <ToastContainer
        autoClose={2000}
        transition={Zoom}
        style={{ fontSize: '1.6rem' }}
      />
    </>
  );
}

export default App;
