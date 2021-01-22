import { Switch, Route } from 'react-router-dom';
import { GlobalStyle } from '../globalStyles';

import { AuthProvider } from '../contexts/AuthContext';
import PrivateRoute from './PrivateRoute';

import Home from './HomePage';
import OrderPage from './OrderingSystem/public/OrderPage';
import LoginPage from './LoginPage';

import DashboardPage from './DashboardPage';
import NewsPage from './NewsPage';
import MealsPage from './MealsPage';
import SoupsPage from './SoupsPage';
import TextsPage from './TextsPage';
import BusinessHoursPage from './BusinessHoursPage';
import NotFound from './NotFoundPage';
import CustomersOrdersPage from './OrderingSystem/private/CustomersOrdersPage';
import NewsCardPage from './NewsCardPage';

import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/order" component={OrderPage} />

          <Route exact path="/login" component={LoginPage} />
          <PrivateRoute exact path="/dashboard/" component={DashboardPage} />
          <PrivateRoute
            exact
            path="/dashboard/orders"
            component={CustomersOrdersPage}
          />
          <PrivateRoute exact path="/dashboard/meals" component={MealsPage} />
          <PrivateRoute exact path="/dashboard/soups" component={SoupsPage} />
          <PrivateRoute exact path="/dashboard/texts" component={TextsPage} />
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

          <Route component={NotFound} />
        </Switch>
      </AuthProvider>
      <ToastContainer
        autoClose={2000}
        transition={Zoom}
        style={{ fontSize: '1.6rem' }}
      />
    </>
  );
}

export default App;
