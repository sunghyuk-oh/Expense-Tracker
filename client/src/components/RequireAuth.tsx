import { Component } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import { useNavigate } from 'react-router-dom';

const RequireAuth = (ComposedComponent: any) => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

  class Authenticate extends Component {
    constructor(props: any) {
      super(props);

      if (isLoggedIn) {
        navigate('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  return Authenticate;
};

export default RequireAuth;
