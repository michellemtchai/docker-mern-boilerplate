import App from '../pages/app';
import { connect } from 'react-redux';
import * as app from '../actions/app';

const mapStateToProps = (state) => {
  return state;
};
const mapDispatchToProps = (dispatch) => {
  return {
    ...app.map(dispatch),
  };
};
export const Container = connect(mapStateToProps, mapDispatchToProps)(App);