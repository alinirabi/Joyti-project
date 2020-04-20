import React,{ Component } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

class RouteWithLayout extends Component  {
  render(){
    const { layout: Layout, component: Component, ...rest } = this.props;
    return(
  <Route
        {...rest}
        render={matchProps => (
          <Layout>
            <Component {...matchProps} />
          </Layout>
        )}
      />
  
    )
  }
  };

RouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string
};

export default RouteWithLayout;
