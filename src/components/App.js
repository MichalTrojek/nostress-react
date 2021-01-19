import { Switch, Route } from 'react-router-dom';
import { GlobalStyle } from '../globalStyles';

import { AuthProvider } from '../contexts/AuthContext';
import PrivateRoute from './PrivateRoute';

import Home from '../components/HomePage';
import OrderPage from './OrderingSystem/public/OrderPage';
import LoginPage from '../components/LoginPage';

import DashboardPage from './DashboardPage';
import NewsPage from './pages/private/NewsPage';
import MealsPage from './pages/private/MealsPage';
import SoupsPage from './pages/private/SoupsPage';
import BusinessHoursPage from './BusinessHoursPage';
import CustomersOrdersPage from '../components/OrderingSystem/private/CustomersOrdersPage';
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
