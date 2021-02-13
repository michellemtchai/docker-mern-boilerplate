import App from '../pages/app';
import { connect } from 'react-redux';
import * as sample from '../actions/sample';

const mapStateToProps = (state) => {
  return state;
};
const mapDispatchToProps = (dispatch) => {
  return {
    ...sample.map(dispatch),
  };
};
export const Container = connect(mapStateToProps, mapDispatchToProps)(App);