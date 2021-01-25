import { Switch, Route } from 'react-router-dom';
import { GlobalStyle } from '../globalStyles';

import { AuthProvider } from '../contexts/AuthContext';
import PrivateRoute from './PrivateRoute';

import Home from './public/HomePage';
import OrderPage from './public/OrderPage';
import LoginPage from './public/LoginPage';

import NewsPage from './private/NewsPage';
import MealsPage from './private/MealsPage';
import SoupsPage from './private/SoupsPage';
import TextsPage from './private/TextsPage';
import NotFound from './private/NotFoundPage';
import NewsCardPage from './private/NewsCardPage';
import DashboardPage from './private/DashboardPage';
import BusinessHoursPage from './private/BusinessHoursPage';

import CustomersOrdersPage from './private/CustomersOrdersPage';

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
