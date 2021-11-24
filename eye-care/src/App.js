
import './App.css';
import Home from './Pages/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Booking from './Pages/Booking/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Header/Footer';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Appointments from './Pages/Home/Appointment/Appointments';
import Registar from './Pages/Login/Registar/registar';
import Doctors from './Pages/Home/Doctors/Doctors';

function App() {
  return (
    <div>

      <AuthProvider>

        <Router>
          <Header>
          </Header>

          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>



            <Route path="/registar">
              <Registar></Registar>
            </Route>

            <Route path="/doctors">
              <Doctors></Doctors>
            </Route>

            <PrivateRoute path="/appointments">
              <Appointments></Appointments>
            </PrivateRoute>
            <PrivateRoute path="/booking/:serviceId">

              <Booking></Booking>
            </PrivateRoute>




            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>

          <Footer></Footer>
        </Router>


      </AuthProvider>





    </div>
  );
}

export default App;
