import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (

    // react router 6
    // <AuthWrapper>
    //   <Router>
    //     <Routes>
    //       <Route 
    //         path="/" 
    //         element={
    //           <PrivateRoute>
    //             <Dashboard />
    //           </PrivateRoute>
    //         } />
    //       <Route path="login" element={<Login /} />
    //       <Route path="*" element={<Error /} />
    //     </Routes>
    //   </Router>
    // </AuthWrapper>


    <AuthWrapper>
      <Router>
        <Switch>
          <PrivateRoute exact={true} path="/">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>
    </AuthWrapper>
    
  );
}

export default App;
