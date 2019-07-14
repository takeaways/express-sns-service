import React from 'react';
import AppLayout from '../components/AppLayout';
import PropTypes from 'prop-types';

const Main = ({Component}) => {
  return (
    <AppLayout>
      <Component/>
    </AppLayout>
  );
}

Main.propTypes = {
  Component: PropTypes.elementType,
}


export default Main
