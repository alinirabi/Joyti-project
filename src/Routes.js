import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {
  Login as LoginView,
  ForgotPassword,
  CategoryList,
  NewCategory,
  EditCategory,
  NewQuetsion,
  QuestionList,
  EditQuestion,
  Layout2,
  NotFound as NotFoundView,
} from './views';
import RouteWithLayout from './components/RouteWithLayout';

const Routes = () => {
  return (
    <Switch>
      {/* <Route path='/' exact component={requireAuth(MainView)}></Route> */}
      <Redirect exact from='/' to='/login' />
      <Route path='/login' exact component={LoginView}></Route>
      <Route path='/forgotPassword' exact component={ForgotPassword}></Route>
      <RouteWithLayout
        path='/dashboard'
        exact
        layout={Layout2}
        component={CategoryList}
      />
       <RouteWithLayout
        path='/new-category'
        exact
        layout={Layout2}
        component={NewCategory}
      />
      <RouteWithLayout
        path='/edit-category'
        exact
        layout={Layout2}
        component={EditCategory}
      />
      <RouteWithLayout
        path='/questions-list'
        exact
        layout={Layout2}
        component={QuestionList}
      />
      <RouteWithLayout
        path='/new-question'
        exact
        layout={Layout2}
        component={NewQuetsion}
      />
       <RouteWithLayout
        path='/edit-question'
        exact
        layout={Layout2}
        component={EditQuestion}
      />
      <Route path='/not-found' exact component={NotFoundView}></Route>
      <Redirect from='*' to='/not-found' />
    </Switch>
  );
};

export default Routes;
